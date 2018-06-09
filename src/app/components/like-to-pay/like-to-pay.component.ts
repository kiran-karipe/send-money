import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  PAY_CARD_IS_SELECTED,
} from '../../app.reducer';

@Component({
  selector: 'app-like-to-pay',
  templateUrl: './like-to-pay.component.html',
  styleUrls: ['./like-to-pay.component.css']
})
export class LikeToPayComponent implements OnInit {
  @Input() selectedCountry: Country;
  payType: string;
  receiveType: string;

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.payType = app.payType;
        this.receiveType = app.receiveType;
      });
  }
  ngOnInit() {
  }

  getPrice(payType) {
    if(payType === 'Credit/debit card') {
      if(this.receiveType === 'Cash pickup') {
        return this.selectedCountry.cashPickupCreditCardTransferFee;
      } else {
        return this.selectedCountry.bankAccountCreditCardTransferFee;
      }
    } else if(payType ==='Bank account') {
      if(this.receiveType === 'Cash pickup') {
        return this.selectedCountry.cashPickupBankAccountTransferFee;
      } else {
        return this.selectedCountry.bankAccountBankAccountTransferFee;
      }
    } else {
      if(this.receiveType === 'Cash pickup') {
        return this.selectedCountry.cashPickupPayInStoreTransferFee;
      } else {
        return this.selectedCountry.bankAccountPayInStoreTransferFee;
      }
    }
  }
  cardIsSelected($event) {
    this._store.dispatch({
      type: PAY_CARD_IS_SELECTED,
      payload: $event
    });
  }
}

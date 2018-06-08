import { Component, OnInit, Input, Output } from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  SET_LIKE_TO_PAY,
} from '../../app.reducer';
@Component({
  selector: 'app-like-to-pay-card',
  templateUrl: './like-to-pay-card.component.html',
  styleUrls: ['./like-to-pay-card.component.css']
})
export class LikeToPayCardComponent implements OnInit {
  @Input() selectedCountry: Country;
  @Input() likeToPayCardName: string;
  setLikeToPay: string;
  receiveType: string;
  creditDebitFooter: number;
  bankAccountFooter: number;
  payInStoreFooter: number;

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.receiveType = app.setReceiveType;
        this.setLikeToPay = app.setLikeToPay;
      });
  }

  ngOnInit() {
    if(this.receiveType === 'Cash pickup') {
      this.creditDebitFooter = this.selectedCountry.creditCardTransferFeeCashPickup;
      this.bankAccountFooter = this.selectedCountry.bankAccountTransferFeeCashPickup;
      this.payInStoreFooter = this.selectedCountry.payInStoreTransferFeeCashPickup;
    } else {
      this.creditDebitFooter = this.selectedCountry.creditCardTransferFeeBankAccount;
      this.bankAccountFooter = this.selectedCountry.bankAccountTransferFeeBankAccount;
      this.payInStoreFooter = this.selectedCountry.payInStoreTransferFeeBankAccount;
    }
  }

  handleClick() {
    this._store.dispatch({
      type: SET_LIKE_TO_PAY,
      payload: this.likeToPayCardName
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { calculateTransferFee } from '../helpers/calculateTransferFee';
import { round } from 'lodash';

@Component({
  selector: 'app-summary-field',
  templateUrl: './summary-field.component.html',
  styleUrls: ['./summary-field.component.css'],
})
export class SummaryFieldComponent implements OnInit {
  baseCountry: Country;
  selectedCountry: Country;
  receiveType: string;
  payType: string;
  transferAmount: number;
  receiveAmount: number;
  transferFee: number;
  transferTotal = 0;

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.baseCountry = app.baseCountry;
        this.selectedCountry = app.selectedCountry;
        this.receiveType = app.receiveType;
        this.payType = app.payType;
        this.transferAmount = app.transferAmount;
        this.receiveAmount = app.receiveAmount;
      });
  }

  ngOnInit() {}

  getTransferFee() {
    return calculateTransferFee({
      payType: this.payType,
      receiveType: this.receiveType,
      country: this.selectedCountry
    });
  }

  getTotal() {
    return round(this.getTransferFee() + this.transferAmount, 2);
  }

}

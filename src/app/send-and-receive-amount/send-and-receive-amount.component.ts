import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { Country } from '../models/country';
import {
  CHANGE_TRANSFER_AMOUNT,
  CHANGE_RECEIVE_AMOUNT
} from '../app.reducer';

@Component({
  selector: 'app-send-and-receive-amount',
  templateUrl: './send-and-receive-amount.component.html',
  styleUrls: ['./send-and-receive-amount.component.css']
})
export class SendAndReceiveAmountComponent {
  @Input() from: Country;
  @Input() to: Country;
  transferAmount: number;
  receiveAmount: number;

  private subscription: Subscription;

  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.transferAmount = app.transferAmount;
        this.receiveAmount = app.receiveAmount;
      });
  }

  onTransferAmountChange(amount) {
    this._store.dispatch({
      type: CHANGE_TRANSFER_AMOUNT,
      payload: amount
    });
  }

  onReceiveAmountChange(amount) {
    this._store.dispatch({
      type: CHANGE_RECEIVE_AMOUNT,
      payload: amount
    });
  }
}

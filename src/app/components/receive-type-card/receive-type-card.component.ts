import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  SET_RECEIVE_TYPE,
} from '../../app.reducer';

@Component({
  selector: 'app-receive-type-card',
  templateUrl: './receive-type-card.component.html',
  styleUrls: ['./receive-type-card.component.css']
})
export class ReceiveTypeCardComponent implements OnInit {
  @Input() countries: Country[];
  @Input() baseCountry: Country;
  @Input() selectedCountry: Country;
  @Input() receiveTypeCardName: string;
  setReceiveType: string;
  // bankAccountCardColor: string = '#fff';
  // cashPickupCardColor: string = '#fff';

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.setReceiveType = app.setReceiveType;
      });
  }

  ngOnInit() {
  }

  handleClick() {
    // if(this.receiveTypeCardName === 'Cash pickup') {
    //   this.cashPickupCardColor = '#1599BB';
    //   this.bankAccountCardColor = '#fff';
    // } else {
    //   this.bankAccountCardColor = '#1599BB';
    //   this.cashPickupCardColor = '#fff';
    // }

    this._store.dispatch({
      type: SET_RECEIVE_TYPE,
      payload: this.receiveTypeCardName
    });
  }
}

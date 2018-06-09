import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  RECEIVE_CARD_IS_SELECTED,
} from '../../app.reducer';


@Component({
  selector: 'app-receive-type',
  templateUrl: './receive-type.component.html',
  styleUrls: ['./receive-type.component.css']
})
export class ReceiveTypeComponent implements OnInit {
  @Input() selectedCountry: Country;
  receiveType: string;

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.receiveType = app.receiveType;
      });
  }

  cardIsSelected($event) {
    this._store.dispatch({
      type: RECEIVE_CARD_IS_SELECTED,
      payload: $event
    });
  }
  ngOnInit() {
  }
}

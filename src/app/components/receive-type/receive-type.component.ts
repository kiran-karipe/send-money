import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  SET_RECEIVE_TYPE,
} from '../../app.reducer';


@Component({
  selector: 'app-receive-type',
  templateUrl: './receive-type.component.html',
  styleUrls: ['./receive-type.component.css']
})
export class ReceiveTypeComponent implements OnInit {
  @Input() selectedCountry: Country;
  receiveTypeCardName: string;

  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    // this.subscription = this._store
    //   .select('app')
    //   .subscribe(app => {
    //     this.setReceiveType = app.setReceiveType;
    //   });
  }

  ngOnInit() {
  }

  handleClick() {
    this._store.dispatch({
      type: SET_RECEIVE_TYPE,
      payload: this.receiveTypeCardName
    });
  }

}

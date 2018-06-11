import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../../models/state';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-state-dropdown',
  templateUrl: './state-dropdown.component.html',
  styleUrls: ['./state-dropdown.component.css']
})
export class StateDropdownComponent implements OnInit {
  @Input() country: Country;
  @Input() states: State[];
  @Output() stateChangeEvent = new EventEmitter<State>();
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

  handleChange(stateId: Number) {
    this.stateChangeEvent.emit(this.states.find(state => state.id == stateId));
  }
}

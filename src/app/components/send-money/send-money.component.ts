import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { CountryService } from '../../country.service';
import { Country } from '../../models/country';
import { State } from '../../models/state';
import * as fromRoot from '../../app.reducer';
import {
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  SET_BASE_COUNTRY,
  GET_STATES,
  SET_SELECTED_STATE,
} from '../../app.reducer';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  countries: Country[];
  states: State[];
  baseCountry: Country;
  selectedCountry: Country;

  private subscription: Subscription;

  constructor(private _store: Store<any>, private countryService: CountryService) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.countries = app.countries;
        this.baseCountry = app.baseCountry;
        this.selectedCountry = app.selectedCountry;
        this.states = app.states;
      });
  }

  ngOnInit() {
    this.getCountries();
    this.getStates();
    this.setBaseCountry();
    this.setSelectedCountry(this.getBaseCountry());
  }

  getBaseCountry() {
    return this.countries.find(country => country.name == "United States");
  }

  getCountries(): void {
    this._store.dispatch({
      type: GET_COUNTRIES,
      payload: this.countryService.getCountries()
    });
  }

  getStates(): void {
    this._store.dispatch({
      type: GET_STATES,
      payload: this.countryService.getStates()
    });
  }

  setBaseCountry(): void {
    this._store.dispatch({
      type: SET_BASE_COUNTRY,
      payload: this.getBaseCountry()
    });
  }

  setSelectedCountry(selectedCountry: Country): void {
    this._store.dispatch({
      type: SET_SELECTED_COUNTRY,
      payload: selectedCountry
    });
  }

  setSelectedState(selectedState: State): void {
    this._store.dispatch({
      type: SET_SELECTED_STATE,
      payload: selectedState
    })
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { CountryService } from '../../country.service';
import { Country } from '../../models/country';
import * as fromRoot from '../../app.reducer';
import {
  GET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  SET_BASE_COUNTRY
} from '../../app.reducer';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  private subscription: Subscription;
  countries: Country[];
  baseCountry: Country;
  selectedCountry: Country;

  constructor(private _store: Store<any>, private countryService: CountryService) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.countries = app.countries;
        this.baseCountry = app.baseCountry;
        this.selectedCountry = app.selectedCountry;
      });
  }

  ngOnInit() {
    this.getCountries();
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

  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}

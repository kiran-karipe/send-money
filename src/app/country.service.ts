import { Injectable } from '@angular/core';
import { Country } from './models/country';
import { COUNTRIES } from './mock-data/countries';
import { State } from './models/state';
import { STATES } from './mock-data/states';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getStates(): State[] {
    return STATES;
  }
}

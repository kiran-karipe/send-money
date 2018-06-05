import { Injectable } from '@angular/core';
import { Country } from './models/country';
import { COUNTRIES } from './mock-data/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Country[] {
    return COUNTRIES;
  }
}

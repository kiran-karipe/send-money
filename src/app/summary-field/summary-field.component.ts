import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-summary-field',
  templateUrl: './summary-field.component.html',
  styleUrls: ['./summary-field.component.css'],
})
export class SummaryFieldComponent implements OnInit {
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
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-summary-field',
  templateUrl: './summary-field.component.html',
  styleUrls: ['./summary-field.component.css'],
})
export class SummaryFieldComponent implements OnInit {

  constructor(private countryService: CountryService) { }
  countries: Country[];
  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }



}

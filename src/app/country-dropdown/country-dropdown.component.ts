import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;
  baseCountry: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
    this.baseCountry = this.countries.find(country => country.name == "United States");
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }

  onChange(countryId: Number) {
    this.selectedCountry = this.countries.find(country => country.id == countryId);
  }
}

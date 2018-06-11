import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[];
  selectedCountry: Country;

  constructor(private countryService: CountryService) { }
  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }
}

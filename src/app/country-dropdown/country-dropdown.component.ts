import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent {
  displayDropdown = false;

  @Input() countries: Country[];
  @Input() selectedCountry: Country;
  @Output() countryChangeEvent = new EventEmitter<Country>();

  handleOnClick() {
    this.displayDropdown = !this.displayDropdown;
  }

  handleChange(countryId: string) {
    this.countryChangeEvent.emit(this.countries.find(country => country.id === parseInt(countryId)));
    this.displayDropdown = false;
  }
}

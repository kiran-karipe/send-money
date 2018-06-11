import { Component, Input, Output } from '@angular/core';
import { ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';
import { SendAndReceiveAmountComponent } from '../send-and-receive-amount/send-and-receive-amount.component';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent {
  @Input() countries: Country[];
  @Input() selectedCountry: Country;
  @Output() countryChangeEvent = new EventEmitter<Country>();

  handleChange(countryId: Number) {
    this.countryChangeEvent.emit(this.countries.find(country => country.id == countryId));
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  countries = ['United States', 'India', 'United Kingdom', 'China', 'Mexico'];
  selectedCountry = this.countries[0];
  constructor() {
    console.log("It is working " + this.selectedCountry);
  }

  ngOnInit() {
  }
}

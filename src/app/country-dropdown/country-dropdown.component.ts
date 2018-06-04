import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  countries = ['United States', 'India', 'United Kingdom', 'China', 'Mexico'];
  selectedCountry = '';
  selectedUS = true;
  constructor() {
  }

  ngOnInit() {
  }

  onChange(event) {
    this.selectedCountry = event.target.value;
    if(this.selectedCountry === 'United States') {
      this.selectedUS = true;
    } else {
      this.selectedUS = false;
    }
    console.log(this.selectedCountry);
  }
}

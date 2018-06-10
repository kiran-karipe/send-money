import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-send-amount-field',
  templateUrl: './send-amount-field.component.html',
  styleUrls: ['./send-amount-field.component.css']
})
export class SendAmountFieldComponent implements OnInit {
  @Input() sendAmount: Country;
  amount = 0;
  constructor() {
  }

  ngOnInit(): void {

  }

  onAmountChange(event) {
    this.amount = event.target.value;
  }

}

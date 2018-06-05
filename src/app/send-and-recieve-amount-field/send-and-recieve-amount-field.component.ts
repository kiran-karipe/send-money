import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-send-and-recieve-amount-field',
  templateUrl: './send-and-recieve-amount-field.component.html',
  styleUrls: ['./send-and-recieve-amount-field.component.css']
})
export class SendAndRecieveAmountFieldComponent implements OnInit {
  @Input() sendAmount: Country;
  @Input() receiveAmount: Country;
  constructor() { }

  ngOnInit() {
    this.onSendAmountChange();
  }
  receiveAmountValue = 0;

  onSendAmountChange(event) {
    this.receiveAmountValue = event * this.receiveAmount.exchangeRate;
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-send-and-recieve-amount-field',
  templateUrl: './send-and-recieve-amount-field.component.html',
  styleUrls: ['./send-and-recieve-amount-field.component.css']
})
export class SendAndRecieveAmountFieldComponent implements OnInit {
  @Input() sendAmount: Country;
  @Input() receiveAmount: Country;

  receiverCurrency= '';
  receiverCurrencyCode='';
  constructor() { }

  ngOnInit() {
  }
  receiveAmountValue = 0.00;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['receiveAmount']) {
      this.receiveAmountValue = parseFloat((this.sendAmount.exchangeRate * this.receiveAmount.exchangeRate).toFixed(4));
      this.receiverCurrency = this.receiveAmount.currency;
      this.receiverCurrencyCode = this.receiveAmount.currencyCode;
    }
  }

  onKey(event) {
    this.sendAmount.exchangeRate = event;
    this.receiveAmountValue = parseFloat((this.sendAmount.exchangeRate * this.receiveAmount.exchangeRate).toFixed(4));
  }

}

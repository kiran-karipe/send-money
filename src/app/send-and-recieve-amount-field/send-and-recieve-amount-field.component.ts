import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
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

  @Output() messageEvent = new EventEmitter<Country>();
  @Output() messageEvent1 = new EventEmitter<number>();
  @Output() messageEvent2 = new EventEmitter<number>();
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
    this.messageEvent.emit(this.receiveAmount);
    this.messageEvent1.emit(this.receiveAmountValue);
    this.messageEvent2.emit(event);
  }

}

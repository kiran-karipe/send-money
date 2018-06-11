import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Country } from '../../models/country';

@Component({
  selector: 'app-amount-field',
  templateUrl: './amount-field.component.html',
  styleUrls: ['./amount-field.component.css']
})
export class AmountFieldComponent implements OnInit{
  @Input() placeholder: string;
  @Input() amount: number;
  @Input() country: Country;
  @Input() firstColumn: boolean;
  @Output() amountChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
  }

  handleAmountChange(amount) {
    this.amountChange.emit(parseFloat(amount));
  }
}

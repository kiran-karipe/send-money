import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-send-amount-field',
  templateUrl: './send-amount-field.component.html',
  styleUrls: ['./send-amount-field.component.css']
})
export class SendAmountFieldComponent implements OnInit {
  @Input() sendAmount: Country;
s  amount = 0;
  constructor(private dataService: DataService) {
    this.dataService.getAmount(this.amount);
  }

  ngOnInit(): void {

  }

  onAmountChange(event) {
    this.amount = event.target.value;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-in-store-card',
  templateUrl: './pay-in-store-card.component.html',
  styleUrls: ['./pay-in-store-card.component.css']
})
export class PayInStoreCardComponent implements OnInit {

  selectedPayInStore = false;

  constructor() { }

  ngOnInit() {
  }

  onPayInStoreSelect(event) {
    this.selectedPayInStore = true;
    console.log(this.selectedPayInStore);
  }

}

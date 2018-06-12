import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  promoClicked = false;
  buttonEnabled= false;
  constructor() { }

  ngOnInit() {
  }

  handlePromoField() {
    this.promoClicked = !this.promoClicked;
  }

  handleButton($event) {
    if($event.length > 0) {
      this.buttonEnabled = true;
    } else {
      this.buttonEnabled = false;
    }
  }
}

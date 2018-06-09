import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-like-to-pay-card',
  templateUrl: './like-to-pay-card.component.html',
  styleUrls: ['./like-to-pay-card.component.css']
})
export class LikeToPayCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() country: Country;
  @Input() selected: boolean;
  @Input() price: number;
  @Output() isSelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.isSelectedEvent.emit(this.cardName);
  }

}

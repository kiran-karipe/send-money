import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-receive-type-card',
  templateUrl: './receive-type-card.component.html',
  styleUrls: ['./receive-type-card.component.css']
})
export class ReceiveTypeCardComponent implements OnInit {

  @Input() cardName: string;
  @Input() country: Country;
  @Input() selected: boolean;
  @Output() isSelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.isSelectedEvent.emit(this.cardName);
  }
}

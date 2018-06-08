import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-receive-type-card',
  templateUrl: './receive-type-card.component.html',
  styleUrls: ['./receive-type-card.component.css']
})
export class ReceiveTypeCardComponent implements OnInit {
  @Input() countries: Country[];
  @Input() baseCountry: Country;
  @Input() selectedCountry: Country;
  @Input() receiveTypeCardName: string;

  // @Output() cardNameEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
}

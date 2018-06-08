import { Component, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-summary-field',
  templateUrl: './summary-field.component.html',
  styleUrls: ['./summary-field.component.css'],
})
export class SummaryFieldComponent {

  @Input() countries: Country[];
  @Input() baseCountry: Country;
  @Input() selectedCountry: Country;
  @Input() receiveTypeCardName: string;
  transferAmount: number;
  receiveAmount: number;
  receiveType: string;
  likeToPayType: string;
  private subscription: Subscription;

  constructor(private _store: Store<any>) {
    this.subscription = this._store
      .select('app')
      .subscribe(app => {
        this.transferAmount = app.transferAmount;
        this.receiveAmount = app.receiveAmount;
        this.receiveType = app.setReceiveType;
        this.likeToPayType = app.setLikeToPay;
      });
  }
}

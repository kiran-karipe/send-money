import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/country';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import {
  SET_LIKE_TO_PAY,
} from '../../app.reducer';

@Component({
  selector: 'app-like-to-pay',
  templateUrl: './like-to-pay.component.html',
  styleUrls: ['./like-to-pay.component.css']
})
export class LikeToPayComponent implements OnInit {
  @Input() selectedCountry: Country;
  likeToPayCardName: string;
  setLikeToPay: string;
  
  private subscription: Subscription;
  constructor(private _store: Store<any>) {
    // this.subscription = this._store
    //   .select('app')
    //   .subscribe(app => {
    //     this.setLikeToPay = app.setLikeToPay;
    //   });
  }
  ngOnInit() {
  }

  handleClick() {
    this._store.dispatch({
      type: SET_LIKE_TO_PAY,
      payload: this.likeToPayCardName
    });
  }
}

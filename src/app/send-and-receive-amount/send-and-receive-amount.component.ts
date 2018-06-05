import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Country } from '../models/country';
import * as _ from 'lodash';

@Component({
  selector: 'app-send-and-receive-amount',
  templateUrl: './send-and-receive-amount.component.html',
  styleUrls: ['./send-and-receive-amount.component.css']
})
export class SendAndReceiveAmountComponent implements OnInit {
  @Input() from: Country;
  @Input() to: Country;

  constructor() { }

  ngOnInit() {
    // this.onChangeCountry();
  }
  _to: Country;
  isSameCountry = true;
  ngOnChanges(changes: SimpleChanges) {
    if(changes['to']) {
      // const to: SimpleChange = changes.to
      // this._to = to.currentValue;
      if(typeof this.to !== "undefined") {
        if(!_.isEqual(this.from, this.to)) {
          this.isSameCountry = false;
        } else {
          this.isSameCountry = true;
        }
      }
    }
  }

  // onChangeCountry(): boolean {
  //   return this.isSameCountry;
  // }

}

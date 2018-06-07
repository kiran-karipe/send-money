import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Country } from '../models/country';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-send-and-receive-amount',
  templateUrl: './send-and-receive-amount.component.html',
  styleUrls: ['./send-and-receive-amount.component.css']
})
export class SendAndReceiveAmountComponent implements OnInit {
  @Input() from: Country;
  @Input() to: Country;
  // noBank: boolean;
  constructor() { }

  // receiverCountry: Country;
  // toReceiver: number;
  // transferAmount: number;

  // @Output() changeEvent = new EventEmitter<Country>();
  // @Output() changeEvent1 = new EventEmitter<number>();
  // @Output() changeEvent2 = new EventEmitter<number>();

  ngOnInit() {
    // this.onChangeCountry();
  }
  // _to: Country;
  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes['to']) {
  //     // const to: SimpleChange = changes.to
  //     // this._to = to.currentValue;
  //
  //   }
  // }

  receiverAmountCountry($event) {
    this.receiverCountry = $event;
  }

  receiverAmount($event) {
    this.toReceiver = $event;
  }

  sendAmount($event) {
    this.transferAmount = $event;
  }

  onChange(event) {
    this.changeEvent.emit(this.receiverCountry);
    this.changeEvent1.emit(this.toReceiver);
    this.changeEvent2.emit(this.transferAmount);
  }
  // if(this.selectedCountry.name === "Jamaica" || this.selectedCountry.name === "Colombia") {
  //   noBankAccount = false;
  // }

  // onChangeCountry(): boolean {
  //   return this.isSameCountry;
  // }

}

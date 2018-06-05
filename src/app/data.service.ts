import { Injectable } from '@angular/core';
import { SendAmountFieldComponent } from './send-amount-field/send-amount-field.component'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sendAmount = 0;
  constructor() { }
  getAmount(data) {
    return data;
    // console.log(data)
  }

}

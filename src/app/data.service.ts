import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from './models/country';

@Injectable()
export class DataService {

  receiverCountry: Country;

  private messageSource = new BehaviorSubject(this.receiverCountry);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Country) {
    this.messageSource.next(message)
  }

}

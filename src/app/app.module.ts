import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { StoreModule, Store } from '@ngrx/store';
import { appReducer } from './app.reducer';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng4-click-outside';

import { AppComponent } from './app.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { SummaryFieldComponent } from './summary-field/summary-field.component';
import { CountryService } from './country.service';
import { SendAndReceiveAmountComponent } from './send-and-receive-amount/send-and-receive-amount.component';
import { SendMoneyComponent } from './components/send-money/send-money.component';
import { AmountFieldComponent } from './components/amount-field/amount-field.component';
import { ReceiveTypeCardComponent } from './components/receive-type-card/receive-type-card.component';
import { LikeToPayCardComponent } from './components/like-to-pay-card/like-to-pay-card.component';
import { ReceiveTypeComponent } from './components/receive-type/receive-type.component';
import { LikeToPayComponent } from './components/like-to-pay/like-to-pay.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';
import { StateDropdownComponent } from './components/state-dropdown/state-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDropdownComponent,
    SummaryFieldComponent,
    SendAndReceiveAmountComponent,
    SendMoneyComponent,
    AmountFieldComponent,
    ReceiveTypeCardComponent,
    LikeToPayCardComponent,
    ReceiveTypeComponent,
    LikeToPayComponent,
    PromoCodeComponent,
    StateDropdownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer }),
    NgbModule.forRoot(),
    ClickOutsideModule
  ],
  providers: [ CountryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { SendAmountFieldComponent } from './send-amount-field/send-amount-field.component';
import { CashPickupCardComponent } from './cash-pickup-card/cash-pickup-card.component';
import { BankAccountCardComponent } from './bank-account-card/bank-account-card.component';
import { CreditDebitPaymentCardComponent } from './credit-debit-payment-card/credit-debit-payment-card.component';
import { BankAccountPaymentCardComponent } from './bank-account-payment-card/bank-account-payment-card.component';
import { PayInStoreCardComponent } from './pay-in-store-card/pay-in-store-card.component';
import { SummaryFieldComponent } from './summary-field/summary-field.component';
import { ConfirmStateDropdownComponent } from './confirm-state-dropdown/confirm-state-dropdown.component';
import { SendAndRecieveAmountFieldComponent } from './send-and-recieve-amount-field/send-and-recieve-amount-field.component';
import { DataService } from './data.service';
import { SendAndReceiveAmountComponent } from './send-and-receive-amount/send-and-receive-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDropdownComponent,
    SendAmountFieldComponent,
    CashPickupCardComponent,
    BankAccountCardComponent,
    CreditDebitPaymentCardComponent,
    BankAccountPaymentCardComponent,
    PayInStoreCardComponent,
    SummaryFieldComponent,
    ConfirmStateDropdownComponent,
    SendAndRecieveAmountFieldComponent,
    SendAndReceiveAmountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

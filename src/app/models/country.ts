export class Country {
  id: number;
  code: string;
  name: string;
  currency: string;
  currencyCode: string;
  exchangeRate: number;
  cashPickup: boolean;
  bankAccount: boolean;
  cashPickupCreditCardTransferFee: number;
  cashPickupBankAccountTransferFee: number;
  cashPickupPayInStoreTransferFee: number;
  bankAccountCreditCardTransferFee: number;
  bankAccountBankAccountTransferFee: number;
  bankAccountPayInStoreTransferFee: number;
}

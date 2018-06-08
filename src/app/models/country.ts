export class Country {
  id: number;
  name: string;
  currency: string;
  currencyCode: string;
  exchangeRate: number;
  cashPickup: boolean;
  bankAccount: boolean;
  creditCardTransferFeeCashPickup: number;
  bankAccountTransferFeeCashPickup: number;
  payInStoreTransferFeeCashPickup: number;
  creditCardTransferFeeBankAccount: number;
  bankAccountTransferFeeBankAccount: number;
  payInStoreTransferFeeBankAccount: number;
}

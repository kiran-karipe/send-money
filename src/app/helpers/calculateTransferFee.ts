export const calculateTransferFee = ({ country, payType, receiveType }) => {
  if(payType === 'Credit/debit card') {
    if(receiveType === 'Cash pickup') {
      return country.cashPickupCreditCardTransferFee;
    } else {
      return country.bankAccountCreditCardTransferFee;
    }
  } else if(payType ==='Bank account') {
    if(receiveType === 'Cash pickup') {
      return country.cashPickupBankAccountTransferFee;
    } else {
      return country.bankAccountBankAccountTransferFee;
    }
  } else {
    if(receiveType === 'Cash pickup') {
      return country.cashPickupPayInStoreTransferFee;
    } else {
      return country.bankAccountPayInStoreTransferFee;
    }
  }
};

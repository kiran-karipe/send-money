import { ActionReducer, Action } from '@ngrx/store';
import { round } from 'lodash';

import { Country } from './models/country';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SET_BASE_COUNTRY = 'SET_BASE_COUNTRY';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';
export const CHANGE_TRANSFER_AMOUNT = 'CHANGE_TRANSFER_AMOUNT';
export const CHANGE_RECEIVE_AMOUNT = 'CHANGE_RECEIVE_AMOUNT';
export const RECEIVE_CARD_IS_SELECTED = 'RECEIVE_CARD_IS_SELECTED';
export const PAY_CARD_IS_SELECTED = 'PAY_CARD_IS_SELECTED';

interface AppAction extends Action {
  type: string;
  payload?: any;
}

const initialState = {
  countries: [],
  selectedCountry: null,
  transferAmount: 0,
  receiveType: 'Cash pickup',
  payType: 'Bank account'
};

export function appReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case SET_BASE_COUNTRY:
      return {
        ...state,
        baseCountry: action.payload
      };
    case SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
        receiveAmount: round(state.transferAmount * action.payload.exchangeRate, 4),
      };
    case CHANGE_TRANSFER_AMOUNT:
      return {
        ...state,
        transferAmount: action.payload,
        receiveAmount: round(action.payload * state.selectedCountry.exchangeRate, 4),
      };
    case CHANGE_RECEIVE_AMOUNT:
      return {
        ...state,
        transferAmount: round(action.payload / state.selectedCountry.exchangeRate, 4),
        receiveAmount: action.payload
      };
    case RECEIVE_CARD_IS_SELECTED:
      return {
        ...state,
        receiveType: action.payload
      };
    case PAY_CARD_IS_SELECTED:
      return {
        ...state,
        payType: action.payload
      };
    default:
      return state;
  }
}

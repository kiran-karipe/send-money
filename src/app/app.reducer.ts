import { ActionReducer, Action } from '@ngrx/store';
import { Country } from './models/country';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SET_BASE_COUNTRY = 'SET_BASE_COUNTRY';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';

interface AppAction extends Action {
  type: string;
  payload?: any;
}

const initialState = { countries: [] };

export function appReducer(state: <any> = initialState, action: AppAction) {
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
        selectedCountry: action.payload
      };
    default:
      return state;
  }
}

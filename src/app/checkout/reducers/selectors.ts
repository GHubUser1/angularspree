import { CheckoutState } from './checkout.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';

// Base Cart State function
export function getCheckoutState(state: AppState): CheckoutState {
  return state.checkout;
}

// ******************** Individual selectors ***************************
export function fetchLineItems(state: CheckoutState) {
  const ids = state.lineItemIds.toJS();
  const lineItemEntitites = state.lineItemEntities.toJS();
  return ids.map(id => lineItemEntitites[id]);
}

export function fetchOrderNumber(state: CheckoutState) {
  return state.orderNumber;
}

export function fetchTotalCartItems(state: CheckoutState) {
  return state.totalCartItems;
}

// *************************** PUBLIC API's ****************************
export const getLineItems = createSelector(getCheckoutState, fetchLineItems);
export const getOrderNumber = createSelector(getCheckoutState, fetchOrderNumber);
export const getTotalCartItems = createSelector(getCheckoutState, fetchTotalCartItems);
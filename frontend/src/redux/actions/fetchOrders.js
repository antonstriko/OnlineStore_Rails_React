

import {isLoadingOrders, addFetchedOrders} from './orderActions'

export function fetchOrders() {
  return (dispatch) => {
    dispatch(isLoadingOrders());
    fetch('http://localhost:3000/api/v1/orders')
      .then(response => response.json())
      .then(orders => dispatch(addFetchedOrders(orders)));
  };
} 
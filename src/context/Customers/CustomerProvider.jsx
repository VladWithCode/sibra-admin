import React, { useReducer } from 'react';
import CustomerContext from './CustomerContext';
import CustomerReducer from './CustomerReducer';
import {
  SET_CUSTOMER,
  SET_CUSTOMERS,
  SET_CUSTOMER_FIELD,
  SET_NEW_CUSTOMER,
  SET_NEW_CUSTOMER_FIELD,
} from './types';

function CustomerProvider({ children }) {
  const initialState = {
    customers: [],
    customer: -1,
    newCustomer: {},
  };

  const [state, dispatch] = useReducer(CustomerReducer, initialState);

  const setCustomers = customers => {
    if (!customers || customers.length === 0) return;

    dispatch({ type: SET_CUSTOMERS, payload: customers });
  };

  const setCustomer = id => {
    const customerIndex = state.customers.findIndex(c => id === c._id);

    dispatch({ type: SET_CUSTOMER, payload: customerIndex });
  };

  const setCustomerField = (field, value) => {
    dispatch({ type: SET_CUSTOMER_FIELD, payload: { field, value } });
  };

  const setNewCustomer = newCustomer => {
    dispatch({ type: SET_NEW_CUSTOMER, payload: newCustomer });
  };

  const setNewCustomerField = (field, value) => {
    dispatch({ type: SET_NEW_CUSTOMER_FIELD, payload: { field, value } });
  };

  return (
    <CustomerContext.Provider
      value={{
        customers: state.customers,
        customer: state.customer,
        newCustomer: state.newCustomer,
        setCustomers,
        setCustomer,
        setCustomerField,
        setNewCustomer,
        setNewCustomerField,
      }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerProvider;

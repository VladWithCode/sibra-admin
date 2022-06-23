import { safeClone } from '../../utils/helpers';
import {
  SET_CUSTOMER,
  SET_CUSTOMERS,
  SET_CUSTOMER_FIELD,
  SET_NEW_CUSTOMER,
  SET_NEW_CUSTOMER_FIELD,
} from './types';

const CustomerReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CUSTOMERS:
      return { ...state, customers: payload };
    case SET_CUSTOMER:
      return { ...state, customer: payload };
    case SET_NEW_CUSTOMER:
      return { ...state, newCustomer: payload };
    case SET_CUSTOMER_FIELD:
      if (state.customer < 0) {
        console.log('No customer: ' + state.customer);
        return state;
      }

      const customers = safeClone(state.customers);
      customers[state.customer][payload.field] = payload.value;

      return {
        ...state,
        customers: customers,
      };

    case SET_NEW_CUSTOMER_FIELD:
      return {
        ...state,
        newCustomer: {
          ...state.newCustomer,
          [payload.field]: payload.value,
        },
      };

    default:
      return state;
  }
};

export default CustomerReducer;

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
    case SET_CUSTOMER:
    case SET_NEW_CUSTOMER:
      return { ...state, customers: payload };

    case SET_CUSTOMER_FIELD:
      const newState = JSON.parse(JSON.stringify(state));

      newState.customers[state.customer][payload.field] = payload.value;

      return newState;

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

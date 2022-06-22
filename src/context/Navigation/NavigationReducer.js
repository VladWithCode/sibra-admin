import { SET_LINK } from './types';

const NavigationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LINK:
      const { name, value } = payload;

      return {
        [name]: value,
      };

    default:
      return state;
  }
};

export default NavigationReducer;

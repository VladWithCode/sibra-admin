import { SET_IS_EXPANDED } from './types';

const SidebarReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_EXPANDED:
      return {
        ...state,
        isExpanded: payload,
      };
    default:
      return state;
  }
};

export default SidebarReducer;

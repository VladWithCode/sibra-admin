import { useReducer } from 'react';
import SidebarContext from './SidebarContext';
import SidebarReducer from './SidebarReducer';
import { SET_IS_EXPANDED } from './types';

export const SidebarProvider = ({ children }) => {
  const initialState = {
    isExpanded: false,
  };

  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  const toggleIsExpanded = isExpanded => {
    let payload =
      typeof isExpanded === 'boolean' ? isExpanded : !state.isExpanded;

    dispatch({ type: SET_IS_EXPANDED, payload });
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded: state.isExpanded,
        toggleIsExpanded,
      }}>
      {children}
    </SidebarContext.Provider>
  );
};

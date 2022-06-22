import React, { useReducer } from 'react';
import NavigationContext from './NavigationContext';
import NavigationReducer from './NavigationReducer';
import { SET_LINK } from './types';

function NavigationProvider({ children }) {
  const initialState = {
    projectsLink: '/projects',
    customersLink: '/customers',
    recordsLink: '/records',
    calendarLink: '/calendar',
    templatesLink: '/templates',
  };

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  const getSafeName = name => (name.indexOf('Link') > 0 ? name : `${name}Link`);

  const setLink = (name, value) => {
    const safeName = getSafeName(name);

    dispatch({ type: SET_LINK, payload: { name: safeName, value } });
  };

  const forceReset = name => {
    const safeName = getSafeName(name);

    dispatch({ type: SET_LINK, payload: initialState[safeName] });
  };

  return (
    <NavigationContext.Provider
      value={{
        projectsLink: state.projectsLink,
        customersLink: state.customersLink,
        recordsLink: state.recordsLink,
        calendarLink: state.calendarLink,
        templatesLink: state.templatesLink,
        setLink,
        forceReset,
      }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;

import React, { useReducer } from 'react';
import NavigationContext from './NavigationContext';

function NavigationProvider({ children }) {
  const initialState = {
    projectsHref: '/proyectos',
    clientsHref: '/clientes',
    recordsHref: '/expedientes',
    calendarHref: '/calendario',
  };

  const [state, dispatch] = useReducer(initialState);

  return (
    <NavigationContext.Provider
      value={{
        projectsHref: state.projectsHref,
        clientsHref: state.clientsHref,
        recordsHref: state.recordsHref,
        calendarHref: state.calendarHref,
      }}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationProvider;

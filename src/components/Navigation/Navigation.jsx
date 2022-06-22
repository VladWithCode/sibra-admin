import React, { useContext } from 'react';
import NavigationContext from '../../context/Navigation/NavigationContext';
import NavLink from './NavLink';

function Navigation() {
  const { projectsLink, customersLink, calendarLink, templatesLink } =
    useContext(NavigationContext);

  return (
    <div className='sidebar__links'>
      <NavLink to='/'>
        <svg>
          <use href='./assets/svg/home.svg#home'></use>
        </svg>
        <span>Inicio</span>
      </NavLink>
      <NavLink to={projectsLink}>
        <svg>
          <use href='./assets/svg/land.svg#land'></use>
        </svg>
        <span>Proyectos</span>
      </NavLink>
      <NavLink to={customersLink}>
        <svg>
          <use href='./assets/svg/users.svg#users'></use>
        </svg>
        <span>Clientes</span>
      </NavLink>
      <NavLink to={calendarLink}>
        <svg>
          <use href='./assets/svg/calendar.svg#calendar'></use>
        </svg>
        <span>Calendario</span>
      </NavLink>
      <NavLink to={templatesLink}>
        <svg>
          <use href='./assets/svg/file.svg#file'></use>
        </svg>
        <span>Platillas</span>
      </NavLink>
      {/* <NavLink to='/stats'>
        <svg>
          <use href='./assets/svg/stats.svg#stats'></use>
        </svg>
        <span>Estadisticas</span>
      </NavLink>
      <NavLink to='/signin' pushBot={true}>
        <svg>
          <use href='./assets/svg/user.svg#user'></use>
        </svg>
        <span>Estadisticas</span>
      </NavLink> */}
    </div>
  );
}

export default Navigation;

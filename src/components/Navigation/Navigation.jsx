import React, { useContext } from 'react';
import NavigationContext from '../../context/Navigation/NavigationContext';
import SVG from '../UI/SVG';
import NavLink from './NavLink';

function Navigation() {
  const { projectsLink, customersLink, calendarLink, templatesLink } =
    useContext(NavigationContext);

  return (
    <div className="h-5/6 flex flex-col gap-y-12">
      <NavLink to="/">
        <SVG className='w-8 h-8' href="./assets/svg/home.svg#home" />
        <span className='ml-4'>Inicio</span>
      </NavLink>
      <NavLink to={projectsLink}>
        <SVG className='w-8 h-8' href="./assets/svg/land.svg#land" />
        <span className='ml-4'>Proyectos</span>
      </NavLink>
      <NavLink to={customersLink}>
        <SVG className='w-8 h-8' href="./assets/svg/users.svg#users" />
        <span className='ml-4'>Clientes</span>
      </NavLink>
      <NavLink to={calendarLink}>
        <SVG className='w-8 h-8' href="./assets/svg/calendar.svg#calendar" />
        <span className='ml-4'>Calendario</span>
      </NavLink>
      <NavLink to={templatesLink}>
        <SVG className='w-8 h-8' href="./assets/svg/file.svg#file" />
        <span className='ml-4'>Platillas</span>
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

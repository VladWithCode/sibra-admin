import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='icons-container'>
      <NavLink to='/'>
        <svg>
          <use href='./assets/svg/home.svg#home'></use>
        </svg>
      </NavLink>
    </div>
  );
}

export default Navigation;

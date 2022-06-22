import React from 'react';

function Toggler({ onClick }) {
  return (
    <div onClick={onClick} className='sidebar__toggler'>
      <svg className='icon'>
        <use href='./assets/svg/down.svg#down'></use>
      </svg>
    </div>
  );
}

export default Toggler;

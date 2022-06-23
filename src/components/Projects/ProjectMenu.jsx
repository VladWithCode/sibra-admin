import React from 'react';
import FloatingBtn from '../../components/Floating/FloatingBtn';
import FloatingMenu from '../../components/Floating/FloatingMenu';

function ProjectMenu() {
  return (
    <FloatingMenu style={{ '--icon-sz': '2.2rem' }}>
      <FloatingBtn className='btn--info btn--round' tooltip='Editar proyecto'>
        <svg>
          <use href='./assets/svg/pencil.svg#pencil'></use>
        </svg>
      </FloatingBtn>
      <FloatingBtn className='btn--info btn--round' tooltip='Generar Lotes'>
        <svg>
          <use href='./assets/svg/land.svg#land'></use>
        </svg>
      </FloatingBtn>
    </FloatingMenu>
  );
}

export default ProjectMenu;

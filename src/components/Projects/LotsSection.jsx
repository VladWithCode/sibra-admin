import React from 'react';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function LotsSection({ project }) {
  return (
    <Section
      heading='Lotes'
      useCard={true}
      cardShadow={true}
      bodyClass='fs-4 fw-500'
      header={<HeaderBtn>Ver todos</HeaderBtn>}>
      <div className='section__row'>
        <div className='col-2 fw-700'>Lotes</div>
        <div className='col-2 text-right'>{project.totalLots}</div>
      </div>
      <div className='section__row text-primary-l'>
        <div className='col-2 fw-700'>Lotes Disponibles</div>
        <div className='col-2 text-right'>{project.availableLots}</div>
      </div>
      <div className='section__row text-warning'>
        <div className='col-2 fw-700'>Lotes En Pago</div>
        <div className='col-2 text-right'>{project.reservedLots}</div>
      </div>
      <div className='section__row text-primary'>
        <div className='col-2 fw-700'>Lotes Liquidados</div>
        <div className='col-2 text-right'>{project.liquidatedLots}</div>
      </div>
      <div className='section__row text-info'>
        <div className='col-2 fw-700'>Lotes Entregados</div>
        <div className='col-2 text-right'>{project.deliveredLots}</div>
      </div>
    </Section>
  );
}

export default LotsSection;

import React from 'react';
import ChargeCard from '../Charges/ChargeCard';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function ChargeSection({ project }) {
  const { extraCharges } = project;

  return (
    <Section
      heading='Aportaciones'
      useCard={true}
      cardShadow={true}
      bodyClass='p-1 fs-4 fw-500 --scroll charge-list'
      header={<HeaderBtn>Ver más detalles</HeaderBtn>}>
      {extraCharges?.map(ch => (
        <ChargeCard key={ch._id} className='section__row' charge={ch} />
      ))}
    </Section>
  );
}

export default ChargeSection;

import React from 'react';
import ChargeCard from '../Charges/ChargeCard';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function ChargeSection({ projectId, charges }) {
  return (
    <Section
      heading="Aportaciones"
      useCard={true}
      bodyClass="p-4 text-base font-medium --scroll max-h-[260px] space-y-4"
      header={<HeaderBtn>Ver más detalles</HeaderBtn>}
    >
      {charges?.map((ch) => (
        <ChargeCard
          key={ch._id}
          className="section__row"
          projectId={projectId}
          charge={ch}
        />
      ))}
    </Section>
  );
}

export default ChargeSection;

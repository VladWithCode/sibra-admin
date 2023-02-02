import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBtn from '../Projects/HeaderBtn';
import Row from '../Section/Row';
import Section from '../Section/Section';
import RecordCard from './RecordCard';

function RecordListingSection({ customerId, records }) {
  return (
    <Section
      useCard={true}
      heading="Lista de Lotes"
      header={<HeaderBtn>Ver todos</HeaderBtn>}
      bodyClass="p-4 max-h-[20rem] space-y-4 --scroll"
    >
      <Row>
        {records.map((record) => (
          <Link
            to={`/projects/${record.project._id}/lot/${record.lot}`}
            key={record._id}
            className="w-full"
          >
            <RecordCard record={record} />
          </Link>
        ))}
      </Row>
    </Section>
  );
}

export default RecordListingSection;

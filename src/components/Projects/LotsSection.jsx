import React from 'react';
import Detail from '../Section/Detail';
import Row from '../Section/Row';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function LotsSection({ project }) {
  return (
    <Section
      heading="Lotes"
      useCard={true}
      cardShadow={true}
      bodyClass="fs-4 fw-500"
      header={<HeaderBtn>Ver todos</HeaderBtn>}
    >
      <Row>
        <Detail
          className="text-zinc-600"
          title="No. Lotes"
          value={project.totalLots}
        />
      </Row>
      <Row>
        <Detail
          className="text-sky-400"
          title="Lotes Disponibles"
          value={project.availableLots}
        />
      </Row>
      <Row>
        <Detail
          className="text-emerald-400"
          title="Lotes En Pago"
          value={project.reservedLots}
        />
      </Row>
      <Row>
        <Detail
          className="text-emerald-600"
          title="Lotes Liquidados"
          value={project.liquidatedLots}
        />
      </Row>
      <Row>
        <Detail
          className="text-sky-600"
          title="Lotes Entregados"
          value={project.deliveredLots}
        />
      </Row>
      <hr className="mb-1" />
      <Row>
        <Detail title="Manzanas" value={project.manzanas} />
      </Row>
      <Row>
        <Detail
          title="Areas Verdes (No. Manzana)"
          value={project.greenAreas?.join(', ')}
        />
      </Row>
    </Section>
  );
}

export default LotsSection;

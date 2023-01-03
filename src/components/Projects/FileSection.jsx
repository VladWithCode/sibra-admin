import React from 'react';
import Row from '../Section/Row';
import Section from '../Section/Section';
import FileBtn from '../UI/FileBtn';
import HeaderBtn from './HeaderBtn';

function FileSection({ files }) {
  return (
    <Section
      heading="Archivos"
      header={<HeaderBtn>Añadir</HeaderBtn>}
      useCard={true}
      cardShadow={true}
    >
      <Row className="gap-x-4">
        {files.map((f) => {
          return (
            <div className="basis-auto grow-0 shrink-0" key={f._id}>
              <FileBtn path={f.staticPath}>{f.name}</FileBtn>
            </div>
          );
        })}
      </Row>
    </Section>
  );
}

export default FileSection;

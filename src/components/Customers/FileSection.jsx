import React from 'react';
import HeaderBtn from '../Projects/HeaderBtn';
import Row from '../Section/Row';
import Section from '../Section/Section';
import FileBtn from '../UI/FileBtn';

function FileSection({ files }) {
  return (
    <Section
      heading="Archivos"
      header={<HeaderBtn>Añadir</HeaderBtn>}
      useCard={true}
      cardShadow={true}
    >
      <Row className="gap-x-4">
        {files.length === 0 ? (
          <p className="text-2xl text-zinc-300 text-center font-semibold w-full py-4">
            Sin archivos
          </p>
        ) : null}
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

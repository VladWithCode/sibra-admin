import React from 'react';
import Section from '../Section/Section';
import FileBtn from '../UI/FileBtn';
import HeaderBtn from './HeaderBtn';

function FileSection({ project }) {
  return (
    <Section
      heading='Archivos'
      header={<HeaderBtn>Añadir</HeaderBtn>}
      useCard={true}
      cardShadow={true}>
      <div className='section__row col-gap-2'>
        {project.files.map(f => {
          return (
            <div className='col-auto' key={f._id}>
              <FileBtn path={f.staticPath}>{f.name}</FileBtn>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default FileSection;

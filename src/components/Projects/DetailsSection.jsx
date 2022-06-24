import React from 'react';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function DetailsSection({ project }) {
  return (
    <Section
      heading='Datos del Proyecto'
      useCard={true}
      cardShadow={true}
      bodyClass='fs-4 fw-500'
      header={<HeaderBtn>Ver más</HeaderBtn>}>
      <div className='section__row'>
        <div className='col-2 fw-700'>Asociación</div>
        <div className='col-2 text-right'>{project.associationName}</div>
      </div>
      {!!project.notary && (
        <>
          <div className='section__row'>
            <div className='col-2 fw-700'>Notario</div>
            <div className='col-2 text-right'>{project.notary}</div>
          </div>
          <div className='section__row'>
            <div className='col-2 fw-700'>Numero de Escritura</div>
            <div className='col-2 text-right'>
              {project.constitutiveScripture}
            </div>
          </div>
          <div className='section__row'>
            <div className='col-2 fw-700'>Volumen de Escritura</div>
            <div className='col-2 text-right'>{project.constitutiveVolume}</div>
          </div>
          <div className='section__row'>
            <div className='col-2 fw-700'>Fecha de Escrituracion</div>
            <div className='col-2 text-right'>{project.scriptureDate}</div>
          </div>
        </>
      )}
      {project.customers.length > 0 && (
        <div className='section__row'>
          <div className='col-2 fw-700'>Clientes Activos</div>
          <div className='col-2 text-right'>{project.customers.length}</div>
        </div>
      )}
      <div className='section__row'>
        <div className='col-2 fw-700'>Descripción</div>
        <div
          className={`col-2 fs-5 ${
            project.description.length > 30 ? 'text-jus' : 'text-right'
          }`}>
          {project.description}
        </div>
      </div>
    </Section>
  );
}

export default DetailsSection;

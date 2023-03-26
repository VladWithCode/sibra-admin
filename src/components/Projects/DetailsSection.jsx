import React from 'react';
import Detail from '../Section/Detail';
import Row from '../Section/Row';
import Section from '../Section/Section';
import HeaderBtn from './HeaderBtn';

function DetailsSection({ project }) {
    return (
        <Section
            heading="Datos del Proyecto"
            useCard={true}
            cardShadow={true}
            bodyClass="text-base font-medium"
            header={<HeaderBtn>Ver más</HeaderBtn>}
        >
            <Row>
                <Detail title="Asociación" value={project.associationName} />
            </Row>
            {!!project.notary && (
                <>
                    <Row>
                        <Detail title="Notario" value={project.notary} />
                    </Row>
                    <Row>
                        <Detail
                            title="Numero de Escritura"
                            value={project.constitutiveScripture}
                        />
                    </Row>
                    <Row>
                        <Detail
                            title="Volumen de Escritura"
                            value={project.constitutiveVolume}
                        />
                    </Row>
                    <Row>
                        <Detail
                            title="Fecha de Escrituracion"
                            value={project.scriptureDate}
                        />
                    </Row>
                </>
            )}
            {project.customers.length > 0 && (
                <Row>
                    <Detail
                        title="Clientes Activos"
                        value={project.customers.length}
                    />
                </Row>
            )}
            <Row>
                <Detail title="Descripción" value={project.description} />
            </Row>
        </Section>
    );
}

export default DetailsSection;

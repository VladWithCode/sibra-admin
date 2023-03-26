import React, { useState } from 'react';
import concatStrings from '../../utils/concatStrings';
import HeaderBtn from '../Projects/HeaderBtn';
import Detail from '../Section/Detail';
import Row from '../Section/Row';
import Section from '../Section/Section';

function PersonalDataSection({ customer }) {
    const { address, township } = customer;
    const [seeMore, setSeeMore] = useState(false);

    return (
        <Section
            heading="Datos Personales"
            header={
                <HeaderBtn onClick={() => setSeeMore(state => !state)}>
                    {seeMore ? 'Ver menos' : 'Ver Más'}
                </HeaderBtn>
            }
            useCard={true}
            cardShadow={true}
            bodyClass="text-lg font-medium">
            <Row>
                <Detail title="Nombre" value={customer.fullName} />
            </Row>
            <Row>
                <Detail
                    title="Número Telefónico"
                    value={customer.phoneNumber}
                />
            </Row>
            <Row>
                <Detail
                    className={!customer.email ? 'text-zinc-300' : null}
                    title="Email"
                    value={customer.email || 'No especificado'}
                />
            </Row>
            {address ? (
                <Row>
                    <Detail
                        title="Domicilio"
                        value={
                            concatStrings(
                                address.street,
                                address.extNumber &&
                                    `No. ${address.extNumber},`,
                                address.col,
                                address.zip && `C.P. ${address.zip}.`
                            ) || 'Sin definir'
                        }
                    />
                </Row>
            ) : null}
            <hr className="mb-3.5 last:mb-0" />
            {seeMore ? (
                <>
                    <Row>
                        <Detail title="CURP" value={customer.curp} />
                    </Row>
                    <Row>
                        <Detail title="RFC" value={customer.rfc} />
                    </Row>
                    <Row>
                        <Detail
                            title="Estado Civil"
                            value={customer.maritalState}
                        />
                    </Row>
                    <Row>
                        <Detail
                            title="Lugar de nacimiento"
                            value={customer.pob}
                        />
                    </Row>
                    <Row>
                        <Detail
                            title="Fecha de nacimiento"
                            value={customer.dob}
                        />
                    </Row>
                </>
            ) : null}
        </Section>
    );
}

export default PersonalDataSection;

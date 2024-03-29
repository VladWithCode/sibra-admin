import React from 'react';
import { Link } from 'react-router-dom';
import useNavigation from '../../context/navigation/useNavigation';
import Detail from '../Section/Detail';
import Row from '../Section/Row';
import Section from '../Section/Section';

function LotsSection({ project }) {
    const setLink = useNavigation(state => state.setLink);

    return (
        <Section
            heading="Lotes"
            useCard={true}
            cardShadow={true}
            bodyClass="text-base font-medium"
            header={
                <Link
                    className="text-base py-.5 px-2 shadow-hard shadow-zinc-400 bg-info border-2 border-info text-white hover:bg-white hover:text-info ml-auto mr-2 rounded-full"
                    to={`/project/${project._id}/lots`}
                    onClick={() => setLink(`/project/${project._id}/lots`)}>
                    Ver todos
                </Link>
            }>
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

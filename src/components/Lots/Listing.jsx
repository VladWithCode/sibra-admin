import React from 'react';
import getClassname from '../../utils/getClassname';
import Card from '../UI/Card';
import LotCard from './LotCard';
import SlimLotCard from './SlimLotCard';

const cardTypes = {
    detail: LotCard,
    slim: SlimLotCard,
};

function Listing({ projectId, projectName, view, lots, className }) {
    const LotCard = cardTypes[view];

    return (
        <Card
            className={getClassname(
                'max-h-screen space-y-4 --scroll',
                className
            )}
        >
            {lots.map(lot => (
                <LotCard className="shadow-md py-6" lot={lot} />
            ))}
        </Card>
    );
}

export default Listing;

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
        'max-h-screen col-span-2 space-y-4 --scroll',
        className
      )}
    >
      {lots.map((lot) => (
        <LotCard className="shadow-sm">
          <p className="text-lg text-error">{lot.lotNumber}</p>
        </LotCard>
      ))}
    </Card>
  );
}

export default Listing;

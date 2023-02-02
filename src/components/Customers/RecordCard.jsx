import React from 'react';
import getClassname from '../../utils/getClassname';
import Card from '../UI/Card';

const getRecordState = (paymentInfo) => {
  if (paymentInfo.lotAmountPayed < paymentInfo.lotPrice)
    return 'Pago de lote Pendiente';

  if (paymentInfo.chargeAmountPayed < paymentInfo.chargeDebt)
    return 'Servicios/Aportaciones pendientes';

  return 'Liquidado';
};

function RecordCard({ record }) {
  const recordState = getRecordState(record.paymentInfo);

  return (
    <Card className="w-full font-semibold">
      <p className="flex justify-between items-center">
        <span className="text-lg">
          <span className="block">
            Lote {record.lotNumber} Manzana {record.manzana} ({record.lotArea}m
            <sup>2</sup>)
          </span>
          <span className="text-sm text-zinc-400">{record.project.name}</span>
        </span>
        <span
          className={getClassname(
            'text-base',
            recordState === 'Liquidado' ? 'text-emerald-400' : 'text-amber-400'
          )}
        >
          {recordState}
        </span>
      </p>
    </Card>
  );
}

export default RecordCard;

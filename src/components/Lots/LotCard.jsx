import React from 'react';
import getClassname from '../../utils/getClassname';
import { priceToString } from '../../utils/helpers';
import Card from '../UI/Card';

const lotStatuses = {
    available: ['Disponible', 'text-blue-500'],
    reserved: ['Apartado', 'text-amber-500'],
    delivered: ['Entregado', 'text-emerald-500'],
};

function LotCard({ lot, className }) {
    return (
        <Card className={getClassname(className)}>
            <div className="flex justify-between">
                <p className="text-xl font-bold basis-2/4">
                    Lote {lot.lotNumber} Manzana {lot.manzana}
                </p>
                <p className="text-xl text-center basis-1/4">
                    {lot.area}m<sup>2</sup>
                </p>
                <p
                    className={
                        'text-xl basis-1/4 text-right ' +
                        lotStatuses[lot.state][1]
                    }
                >
                    {lotStatuses[lot.state][0]}
                </p>
            </div>
            {lot.customer ? (
                <div className="flex justify-between font-medium pt-4">
                    <p className="text-lg basis-2/4">{lot.customer.name}</p>
                    <p className="text-lg basis-1/4 text-center">
                        ${priceToString(lot.record?.paymentInfo?.lotPrice)}
                    </p>
                    <p className="text-lg basis-1/4 text-right">
                        {lot.customer.phone}
                    </p>
                </div>
            ) : null}
        </Card>
    );
}

export default LotCard;

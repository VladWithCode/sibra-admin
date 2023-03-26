import React from 'react';
import getClassname from '../../utils/getClassname';
import Card from '../UI/Card';

function SlimLotCard({ lot, className }) {
    return (
        <Card className={getClassname(className)}>
            <div className="flex justify-between">
                <p className="text-xl font-bold basis-1/2">
                    Lote {lot.lotNumber} Manzana {lot.manzana}
                </p>
                {lot.customer ? (
                    <p className="text-lg basis-1/2 text-right font-medium">
                        {lot.customer.name}
                    </p>
                ) : (
                    <p className="text-lg text-blue-500 text-right font-medium">
                        Disponible
                    </p>
                )}
            </div>
        </Card>
    );
}

export default SlimLotCard;

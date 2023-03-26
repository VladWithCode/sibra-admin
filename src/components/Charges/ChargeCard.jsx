import React from 'react';
import { getClassName, priceToString } from '../../utils/helpers';
import Button from '../UI/Button';
import SVG from '../UI/SVG';
import { useNavigate } from 'react-router-dom';

function ChargeCard({ projectId, charge, className }) {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/project/${projectId}/charges/${charge._id}/edit`);
    };

    const handleDeleteClick = () => {
        navigate(`/project/${projectId}/charges/${charge._id}/delete`);
    };

    return (
        <div
            className={getClassName(
                'relative rounded-lg bg-info text-white p-4',
                className
            )}>
            <div className="w-full flex px-5">
                <div className="flex flex-wrap w-1/2">{charge.title}</div>
                <div className="ml-auto flex gap-x-4">
                    <Button
                        className="flex bg-success text-white border-2 border-success hover:bg-white hover:text-success py-1 px-2 rounded-lg"
                        onClick={handleEditClick}>
                        <SVG
                            className="w-4 h-4 fill-current"
                            href="./assets/svg/pencil.svg#pencil"
                        />
                    </Button>
                    <Button
                        className="flex bg-error text-white border-2 border-error hover:bg-white hover:text-error py-1 px-2 rounded-lg"
                        onClick={handleDeleteClick}>
                        <SVG className="w-4 h-4 fill-current" id="bin" />
                    </Button>
                </div>
            </div>
            <div className="flex w-full p-4">
                <div className="w-full basis-1/2 text-sm ml-0">
                    {charge.description}
                </div>
                <div className="basis-1/2 text-right">
                    $ {priceToString(charge.amount)}
                </div>
            </div>
        </div>
    );
}

export default ChargeCard;

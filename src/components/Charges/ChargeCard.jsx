import React, { useContext } from 'react';
import { getClassName, priceToString } from '../../utils/helpers';
import Button from '../UI/Button';
import SVG from '../UI/SVG';
import { useNavigate } from 'react-router-dom';
import ProjectContext from '../../context/Projects/ProjectContext';

function ChargeCard({ charge, className }) {
  const navigate = useNavigate();
  const { projects, project: index } = useContext(ProjectContext);
  const project = projects[index];

  const handleEditClick = () => {
    navigate(`/project/${project._id}/charges/${charge._id}/edit`);
  };

  const handleDeleteClick = () => {
    navigate(`/project/${project._id}/charges/${charge._id}/delete`);
  };

  return (
    <div className={getClassName('ui-card --info p-1', className)}>
      <div className='ui-card__header'>
        <div className='ui-card__heading'>{charge.title}</div>
        <div className='ui-card__menu'>
          <Button
            className='btn--success section__btn my-auto'
            onClick={handleEditClick}>
            <SVG href='./assets/svg/pencil.svg#pencil' />
          </Button>
          <Button
            className='btn--danger section__btn my-auto'
            onClick={handleDeleteClick}>
            <SVG id='bin' />
          </Button>
        </div>
      </div>
      <div className='ui-card__body p-1'>
        <div className='ui-card__subheading col-2 ml-0'>
          {charge.description}
        </div>
        <div className='col-2 text-right'>$ {priceToString(charge.amount)}</div>
      </div>
    </div>
  );
}

export default ChargeCard;

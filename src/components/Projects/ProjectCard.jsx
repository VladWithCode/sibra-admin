import React, { useContext } from 'react';
import ProjectContext from '../../context/Projects/ProjectContext';
import { useNavigate } from 'react-router-dom';
import NavigationContext from '../../context/Navigation/NavigationContext';

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { setLink } = useContext(NavigationContext);
  const { setProject } = useContext(ProjectContext);
  const {
    _id,
    name,
    associationName,
    totalLots,
    description,
    reservedLots,
    liquidatedLots,
    availableLots,
  } = project;

  const handleCardClick = () => {
    let link = '/projects/details/' + _id;
    setProject(_id);
    setLink('projects', link);
    navigate(link);
  };

  return (
    <div className='project-card ui-card --shadow' onClick={handleCardClick}>
      <span className='project-card__badge'></span>
      <div className='project-card__header'>
        <div className='left fs-4 text-cap text-white'>
          <span className='project-card__lot-data'>
            <span className='fw-bold mr-1'>{availableLots}</span>
            <span className='text-right'> disponibles</span>
          </span>
          <span className='project-card__lot-data'>
            <strong className='fw-bold mr-1'>{reservedLots}</strong>
            <span className='text-right'> en pago</span>
          </span>
          <span className='project-card__lot-data'>
            <strong className='fw-bold mr-1'>{liquidatedLots}</strong>
            <span className='text-right'> liquidados</span>
          </span>
        </div>
        <div className='right ml-auto p-1'>
          <span className='fs-3 fw-500 text-mute'>{totalLots} Lotes</span>
        </div>
      </div>
      <div className='project-card__body mt-auto mb-1'>
        <span className='fs-4 text-mute association'>{associationName}</span>
        <h4 className='fs-2'>{name}</h4>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

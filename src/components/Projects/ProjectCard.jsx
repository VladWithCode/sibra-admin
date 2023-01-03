import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useNavigation from '../../context/navigation/useNavigation';

function DataRow({ data, desc }) {
  return (
    <span className="flex items-end mb-2">
      <span className="fw-bold mr-1">{data}</span>
      <span className="text-right">{desc}</span>
    </span>
  );
}

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const setLink = useNavigation((state) => state.setLink);
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
    let link = '/project/' + _id;
    setLink('projectsLink', link);
    navigate(link);
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer flex flex-col bg-white px-5 py-3 shadow-lg shadow-zinc-200 rounded-xl group"
      onClick={handleCardClick}
    >
      <span className="absolute top-0 -left-60 z-0 w-60 h-28 bg-info rounded-br-xl transition-[left] duration-300 group-hover:left-0"></span>
      <div className="w-full flex px-4 justify-between z-10">
        <div className="left fs-4 text-cap text-white">
          <DataRow data={availableLots} desc={' disponibles'} />
          <DataRow data={reservedLots} desc={' disponibles'} />
          <DataRow data={liquidatedLots} desc={' disponibles'} />
        </div>
        <div className="ml-auto p-1">
          <span className="fs-3 fw-500 text-mute">{totalLots} Lotes</span>
        </div>
      </div>
      <div className="mt-auto mb-1">
        <span className="text-xs text-zinc-400 association">
          {associationName}
        </span>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

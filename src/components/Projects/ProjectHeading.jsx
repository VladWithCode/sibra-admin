import React from 'react';

function ProjectHeading({ heading }) {
  return (
    <>
      <span className='projectpage__subheading px-1 mt-1n fs-4 text-mute d-b'>
        Proyecto
      </span>
      {heading}
    </>
  );
}

export default ProjectHeading;

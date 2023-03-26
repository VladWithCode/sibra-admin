import React from 'react';

function ProjectHeading({ heading }) {
    return (
        <>
            <span className="-mt-4 text-base text-zinc-400 block">
                Proyecto
            </span>
            {heading}
        </>
    );
}

export default ProjectHeading;

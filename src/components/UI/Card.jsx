import React from 'react';
import getClassname from '../../utils/getClassname';

function Card({ className, children, ...props }) {
    return (
        <div
            className={getClassname(
                'relative bg-white rounded-lg py-3 px-5 shadow-md shadow-zinc-200',
                className
            )}
            {...props}>
            {children}
        </div>
    );
}

export default Card;

import React from 'react';
import getClassname from '../../utils/getClassname';

function Detail({ title, value, className }) {
    return (
        <>
            <div className={getClassname('basis-1/2 font-bold', className)}>
                {title}
            </div>
            <div className={getClassname('basis-1/2 text-right', className)}>
                {value}
            </div>
        </>
    );
}

export default Detail;

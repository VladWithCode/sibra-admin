import React from 'react';
import getClassname from '../../utils/getClassname';

function Row({ className, children }) {
    return (
        <div
            className={getClassname(
                'flex flex-row flex-wrap px-2.5 mb-3.5 gap-y-12 last:mb-0',
                className
            )}
        >
            {children}
        </div>
    );
}

export default Row;

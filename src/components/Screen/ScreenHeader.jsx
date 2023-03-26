import React from 'react';
import { getClassName } from '../../utils/helpers';

function ScreenHeader({ heading, children, className }) {
    return (
        <div
            className={getClassName(
                'flex items-center h-32 bg-white shadow-sm shadow-zinc-200 pt-3 px-24',
                className
            )}>
            <h1 className="text-3xl font-normal">{heading}</h1>
            {children && <div className="mr-5">{children}</div>}
        </div>
    );
}

export default ScreenHeader;

import React from 'react';
import getClassname from '../../utils/getClassname';
import FloatingBtn from './FloatingBtn';

function Action({ children, className, ...props }) {
    return (
        <FloatingBtn
            className={getClassname(
                'shadow-md shadow-zinc-200 rounded-full',
                className
            )}
            {...props}>
            {children}
        </FloatingBtn>
    );
}

export default Action;

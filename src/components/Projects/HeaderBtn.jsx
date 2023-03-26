import React from 'react';
import { getClassName } from '../../utils/helpers';
import Button from '../UI/Button';

function HeaderBtn({ children, className, onClick, ...props }) {
    return (
        <Button
            className={getClassName(
                'text-sm py-.5 px-2 shadow-hard shadow-zinc-400 bg-info border-2 border-info text-white hover:bg-white hover:text-info ml-auto mr-2 rounded-full',
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </Button>
    );
}

export default HeaderBtn;

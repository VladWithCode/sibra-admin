import React from 'react';
import { getClassName } from '../../utils/helpers';
import Button from '../UI/Button';

function FloatingBtn({ tooltip, className, children, onClick, ...props }) {
    return (
        <Button
            className={getClassName('relative group text-base', className)}
            onClick={onClick}
            {...props}>
            {children}
            {tooltip && (
                <span className="opacity-0 pointer-events-none absolute w-max py-1 px-3 top-1/2 -left-3 bg-zinc-900 rounded-sm text-white text-xs -translate-x-full -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-100">
                    {tooltip}
                </span>
            )}
        </Button>
    );
}

export default FloatingBtn;

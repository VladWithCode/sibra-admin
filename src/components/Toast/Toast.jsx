import React from 'react';
import useToast from '../../context/toast/useToast';
import getClassname from '../../utils/getClassname';

function Toast() {
    const { message, type, isActive, reset } = useToast(state => state);

    const handleCloseClick = e => {
        reset();
    };

    return (
        <div
            className={getClassname(
                'toast',
                'fixed -bottom-10 right-8 flex items-center justify-between py-2 px-5 bg-info bg-opacity-60 text-info border-2 border-current rounded opacity-0 z-40 font-alt',
                isActive && 'visible',
                type
            )}>
            <p className="text-base font-medium">{message || 'texting'}</p>
            <span
                className="flex items-center justify-center h-4 w-4 ml-5 cursor-pointer"
                onClick={handleCloseClick}>
                <svg className="h-full w-full fill-current rotate-45">
                    <use href="./assets/svg/plus.svg#plus"></use>
                </svg>
            </span>
        </div>
    );
}

export default Toast;

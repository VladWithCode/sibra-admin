import React, { useState } from 'react';
import getClassname from '../../utils/getClassname';
import SVG from '../UI/SVG';
import FloatingBtn from './FloatingBtn';

function FloatingMenu({ children, className, ...props }) {
    const [show, setShow] = useState(false);

    return (
        <div
            className={getClassname(
                'fixed bottom-6 right-7 flex flex-col-reverse gap-y-1 items-center',
                className,
                show || 'hide'
            )}
            {...props}
        >
            {/* toggler */}
            <div className="z-20">
                <FloatingBtn
                    onClick={() => setShow(state => !state)}
                    className={getClassname(
                        'bg-success rounded-full text-white p-2 shadow-zinc-400',
                        show ? 'shadow-hard' : 'shadow-none'
                    )}
                    tooltip={show ? 'Cerrar' : 'Menu'}
                >
                    <SVG
                        href="./assets/svg/plus.svg#plus"
                        className={getClassname(
                            'h-8 w-8 duration-300 transition-transform',
                            show ? 'rotate-[135deg]' : 'rotate-0'
                        )}
                    />
                </FloatingBtn>
            </div>
            {/* actions */}
            <div
                className={getClassname(
                    'flex flex-1 flex-col-reverse gap-y-4 py-4 max-h-[30vh] transition-[max-height] duration-500 origin-bottom mx-auto',
                    show ? '' : 'max-h-0 opacity-0 mb-0 duration-150'
                )}
            >
                {children}
            </div>
        </div>
    );
}

export default FloatingMenu;

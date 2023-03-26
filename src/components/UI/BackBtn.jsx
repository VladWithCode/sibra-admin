import React from 'react';
import FloatingBtn from '../Floating/FloatingBtn';
import SVG from './SVG';
import { useNavigate } from 'react-router-dom';

function BackBtn({ to, onClick }) {
    const navigate = useNavigate();

    const _onClick = e => {
        typeof onClick === 'function' && onClick(e);
        navigate(typeof to === 'string' && to.length > 0 ? to : -1);
    };

    return (
        <FloatingBtn
            className="bg-error border-2 border-error rounded-full btn--back p-0 left-16 bottom-6 shadow shadow-zinc-200 -rotate-180 text-white hover:bg-white hover:text-error "
            style={{ position: 'fixed' }}
            onClick={_onClick}
        >
            <SVG className="w-10 h-10 fill-current" id="angle" />
        </FloatingBtn>
    );
}

export default BackBtn;

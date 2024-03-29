import React from 'react';
import { getClassName } from '../../utils/helpers';
import SVG from '../UI/SVG';

function Toggler({ isExpanded, onClick }) {
    return (
        <div
            onClick={onClick}
            className={getClassName(
                'fixed flex items-center justify-center top-5 bg-white rounded-full p-2 duration-300 transition-[left] shadow-zinc-300',
                isExpanded
                    ? 'left-48 text-blue-700 shadow-hard'
                    : 'shadow-none left-2'
            )}>
            <SVG
                className={getClassName(
                    'w-6 h-6 -rotate-90 hover:scale-110 hover:-rotate-90 cursor-pointer transition-transform duration-150',
                    isExpanded && 'rotate-90 hover:scale-110 hover:rotate-90'
                )}
                href="./assets/svg/down.svg#down"
            />
        </div>
    );
}

export default Toggler;

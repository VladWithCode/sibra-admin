import React from 'react';
import { getClassName } from '../../utils/helpers';

function SVG({ id, className, href, style, ...props }) {
    return (
        <svg
            className={getClassName(
                'duration-300',
                className || 'w-8 h-8 fill-current'
            )}
            style={style}
            {...props}
        >
            <use href={href || `./assets/svg/sprites.svg#${id}`}></use>
        </svg>
    );
}

export default SVG;

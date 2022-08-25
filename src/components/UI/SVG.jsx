import React from 'react';
import { getClassName } from '../../utils/helpers';

function SVG({ id, className, replaceClassName = false, href, style }) {
  return (
    <svg
      className={getClassName('svg', className, replaceClassName)}
      style={style}>
      <use href={href || `./assets/svg/sprites.svg#${id}`}></use>
    </svg>
  );
}

export default SVG;

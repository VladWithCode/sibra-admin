import React from 'react';
import { getClassName } from '../../utils/helpers';

function SVG({ id, className, replaceClassName = false, style }) {
  return (
    <svg
      className={getClassName('svg', className, replaceClassName)}
      style={style}>
      <use href={`./assets/svg/sprites.svg#${id}`}></use>
    </svg>
  );
}

export default SVG;

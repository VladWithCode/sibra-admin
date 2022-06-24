import React from 'react';
import { getClassName } from '../../utils/helpers';
import Header from './Header';

function Section({ className, heading, header, children, ...props }) {
  return (
    <div className={getClassName('section', className)}>
      <Header heading={heading}>{header}</Header>
      <div
        className={getClassName(
          'section__body',
          `${props.useCard ? 'ui-card' : ''} ${
            props.cardShadow ? ' --shadow' : ''
          } ${props.bodyClass || ''}`
        )}>
        {children}
      </div>
    </div>
  );
}

export default Section;

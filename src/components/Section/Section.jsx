import React from 'react';
import getClassname from '../../utils/getClassname';
import Header from './Header';

function Section({ className, heading, header, children, ...props }) {
  return (
    <div className={getClassname('h-max', className)}>
      <Header heading={heading}>{header}</Header>
      <div
        className={getClassname(
          'relative',
          props.useCard && 'relative bg-white rounded-lg py-3 px-5',
          props.cardShadow && 'shadow-hard shadow-zinc-400',
          props.bodyClass
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;

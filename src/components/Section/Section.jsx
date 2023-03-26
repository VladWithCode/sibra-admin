import React from 'react';
import getClassname from '../../utils/getClassname';
import Card from '../UI/Card';
import Header from './Header';

function Section({ className, heading, header, children, ...props }) {
    return (
        <div className={getClassname('h-max', className)}>
            {!props.headless ? (
                <Header heading={heading}>{header}</Header>
            ) : null}
            {props.useCard ? (
                <Card className={props.bodyClass} {...props}>
                    {children}
                </Card>
            ) : (
                <div
                    className={getClassname('relative', props.bodyClass)}
                    {...props}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

export default Section;

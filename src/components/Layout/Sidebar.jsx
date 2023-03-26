import React from 'react';
import useSidebar from '../../context/sidebar/useSidebar';
import { getClassName } from '../../utils/helpers';
import Navigation from '../Navigation/Navigation';
import Toggler from '../Navigation/Toggler';

function Sidebar() {
    const { isExpanded, toggleIsExpanded } = useSidebar(state => state);

    return (
        <nav
            className={getClassName(
                'fixed bg-white z-30 left-0 top-0 bottom-0 flex items-end duration-200 overflow-hidden shadow-gray-300',
                isExpanded ? 'w-52 shadow-lg' : 'w-12 shadow-md'
            )}
        >
            <Navigation />
            <Toggler
                isExpanded={isExpanded}
                onClick={() => toggleIsExpanded()}
            />
        </nav>
    );
}

export default Sidebar;

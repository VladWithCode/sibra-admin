import React, { useContext } from 'react';
import SidebarContext from '../../context/Sidebar/SidebarContext';
import { getClassName } from '../../utils/helpers';
import Navigation from '../Navigation/Navigation';
import Toggler from '../Navigation/Toggler';

function Sidebar() {
  const { isExpanded, toggleIsExpanded } = useContext(SidebarContext);

  return (
    <nav
      className={getClassName(
        'fixed bg-white z-30 left-0 top-0 bottom-0 flex items-end duration-200 overflow-hidden shadow-gray-300',
        isExpanded ? 'w-52 shadow-lg' : 'w-16 shadow-md'
      )}
    >
      <Navigation />
      <Toggler isExpanded={isExpanded} onClick={() => toggleIsExpanded()} />
    </nav>
  );
}

export default Sidebar;

import React, { useContext } from 'react';
import SidebarContext from '../../context/Sidebar/SidebarContext';

function Sidebar() {
  const { isExpanded } = useContext(SidebarContext);

  return <nav className={isExpanded}></nav>;
}

export default Sidebar;

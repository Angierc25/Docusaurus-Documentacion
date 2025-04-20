import React from 'react';
import OriginalSidebar from '@theme-original/DocSidebar';
import SidebarThemeToggle from '@site/src/components/SidebarThemeToggle';

export default function DocSidebar(props) {
  return (
    <div className="sidebar-custom-header">
      <SidebarThemeToggle />
      <OriginalSidebar {...props} />
    </div>
  );
}

import { useState } from 'react';

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return {
    isCollapsed,
    toggleSidebar,
  };
};

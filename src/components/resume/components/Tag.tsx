// LIBRARIES / PACKAGES
import React from 'react';

// SHARED COMPONENTS

// PROJECT COMPONENTS

// ICONS

// HELPERS

// ACTIONS

// REDUCERS

// APIS

// CONSTANTS

// TYPES
interface TagProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

//----------------------------------------------------------------------------------------------------------------

const Tag: React.FC<TagProps> = ({ children, className = '', icon, onClick }) => {
  return (
    <span 
      className={`tag flex items-center px-3 py-1 text-xs print:text-xs ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-1.5 text-accent opacity-80">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
};

export default Tag;

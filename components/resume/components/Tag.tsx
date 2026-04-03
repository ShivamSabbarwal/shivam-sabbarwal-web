import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const Tag = ({ children, className = '', icon, onClick }: TagProps) => {
  return (
    <span
      className={`tag flex items-center px-3 py-1 text-xs print:text-xs ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-1.5 text-accent opacity-80">{icon}</span>
      )}
      {children}
    </span>
  );
};

export default Tag;

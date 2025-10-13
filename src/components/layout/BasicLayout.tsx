import type { ReactNode } from "react";

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default BasicLayout;

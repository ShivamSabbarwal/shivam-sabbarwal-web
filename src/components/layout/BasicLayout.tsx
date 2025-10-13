import type { ReactNode } from "react";

interface ResumeLayoutProps {
  children: ReactNode;
}

const BasicLayout = ({ children }: ResumeLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default BasicLayout;

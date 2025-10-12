import type { ReactNode } from "react";

interface ResumeLayoutProps {
  children: ReactNode;
}

const ResumeLayout = ({ children }: ResumeLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default ResumeLayout;

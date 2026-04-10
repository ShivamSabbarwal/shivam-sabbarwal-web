import type { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="tag flex items-center px-3 py-1 text-xs print:text-xs">{children}</span>
);

export default Tag;

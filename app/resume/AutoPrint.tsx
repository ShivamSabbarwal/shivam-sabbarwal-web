"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AutoPrint() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") === "true") {
      const timeout = setTimeout(() => window.print(), 500);
      return () => clearTimeout(timeout);
    }
  }, [searchParams]);

  return null;
}

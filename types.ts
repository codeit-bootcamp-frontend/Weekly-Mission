import { ReactNode } from "react";

export interface Children {
  children: ReactNode;
}

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

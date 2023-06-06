"use client";

import { createPortal } from "react-dom";

const AddPortalWrapper = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById("add-portal") as HTMLElement;
  return createPortal(children, el);
};

export default AddPortalWrapper;

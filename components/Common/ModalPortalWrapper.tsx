"use client";

import { createPortal } from "react-dom";

const ModalPortalWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const el = document.getElementById(id) as HTMLElement;
  return createPortal(children, el);
};

export default ModalPortalWrapper;

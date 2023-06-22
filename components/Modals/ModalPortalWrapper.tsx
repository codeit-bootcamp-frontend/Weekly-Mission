"use client";

import { createPortal } from "react-dom";

interface IModalPortalWrapperProps {
  children: React.ReactNode;
  id: string;
}

const ModalPortalWrapper = ({ children, id }: IModalPortalWrapperProps) => {
  const el = document.getElementById(id) as HTMLElement;
  return createPortal(children, el);
};

export default ModalPortalWrapper;

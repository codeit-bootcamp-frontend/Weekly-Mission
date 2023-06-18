"use client";

import { createPortal } from "react-dom";

import { Children } from "@/types";

export default function ModalPortal({ children }: Children) {
  const el = document.getElementById("modal-portal") as HTMLElement;

  return createPortal(children, el);
}

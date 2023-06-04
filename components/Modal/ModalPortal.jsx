"use client";

import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const el = document.getElementById("modal-portal");

  return createPortal(children, el);
}

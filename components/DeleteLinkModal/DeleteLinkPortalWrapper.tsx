"use client";

import React from "react";

import { createPortal } from "react-dom";

const DeleteLinkPortalWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById("delete-link-portal") as HTMLElement;
  return createPortal(children, el);
};

export default DeleteLinkPortalWrapper;

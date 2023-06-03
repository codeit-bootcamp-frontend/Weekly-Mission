"use client";

import React from "react";

import { createPortal } from "react-dom";

const DeleteFolderPortalWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById("delete-folder-portal") as HTMLElement;
  return createPortal(children, el);
};

export default DeleteFolderPortalWrapper;

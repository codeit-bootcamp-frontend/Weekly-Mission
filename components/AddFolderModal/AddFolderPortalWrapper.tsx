"use client";

import React from "react";

import { createPortal } from "react-dom";

const AddFolderPortalWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById("add-folder-portal") as HTMLElement;
  return createPortal(children, el);
};

export default AddFolderPortalWrapper;

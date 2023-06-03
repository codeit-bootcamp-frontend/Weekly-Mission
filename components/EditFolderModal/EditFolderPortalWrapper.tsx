"use client";

import React from "react";

import { createPortal } from "react-dom";

const EditFolderPortalWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById("edit-folder-portal") as HTMLElement;
  return createPortal(children, el);
};

export default EditFolderPortalWrapper;

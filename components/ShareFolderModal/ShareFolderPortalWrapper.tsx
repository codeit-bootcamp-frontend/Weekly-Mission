"use client";

import { createPortal } from "react-dom";

const ShareFolderPortalWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById("share-folder-portal") as HTMLElement;
  return createPortal(children, el);
};

export default ShareFolderPortalWrapper;

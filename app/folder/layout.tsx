import React from "react";

export default async function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div id="add-portal"></div>
      <div id="delete-link-portal"></div>
    </>
  );
}

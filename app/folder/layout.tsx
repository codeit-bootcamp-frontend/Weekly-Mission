import React from "react";

import Footer from "components/Footer/Footer";
import Gnb from "components/Gnb/Gnb";
import getUserData from "lib/getUserData";

export default async function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserData();
  return (
    <>
      <Gnb user={user} />
      {children}
      <Footer />
      <div id="add-portal"></div>
      <div id="delete-link-portal"></div>
      <div id="add-folder-portal"></div>
      <div id="share-folder-portal"></div>
      <div id="edit-folder-portal"></div>
      <div id="delete-folder-portal"></div>
    </>
  );
}

import CardsContextProvider from "$/src/contexts/CardsContextProvider";
import FolderTabsContextProvider from "$/src/contexts/FolderTabsContextProvider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linkbrary-shared",
  description: "아 그 블로그 뭐더라",
};

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CardsContextProvider>
      <FolderTabsContextProvider>
        {children}
        <div id="modal-root" />
      </FolderTabsContextProvider>
    </CardsContextProvider>
  );
}

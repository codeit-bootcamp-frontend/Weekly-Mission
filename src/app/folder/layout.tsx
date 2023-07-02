import { Metadata } from "next";
import styles from "@/styles/folderLayout.module.css";
import AddLinkBar from "$/src/components/AddLinkBar/AddLinkBar";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "아 그 블로그 뭐더라 folder",
};

export default function FloderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div id="modal-root" />
    </>
  );
}

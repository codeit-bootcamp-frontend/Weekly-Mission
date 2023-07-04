import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linkbrary-folder",
  description: "아 그 블로그 뭐더라",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

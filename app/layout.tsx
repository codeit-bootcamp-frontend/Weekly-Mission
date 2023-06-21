import "./globals.css";
import GlobalNavigationBar from "@/layout/GlobalNavigationBar";
import GlobalFooter from "@/layout/GlobalFooter";
import { ReactElement } from "react";

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body>
        <GlobalNavigationBar />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}

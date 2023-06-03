import "./globals.css";
import GlobalNavigationBar from "@layout/GlobalNavigationBar";
import GlobalFooter from "@layout/GlobalFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

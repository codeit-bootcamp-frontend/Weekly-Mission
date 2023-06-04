import "./globals.css";
import GlobalNavigationBar from "@layout/GlobalNavigationBar";
import GlobalFooter from "@layout/GlobalFooter";

export default function RootLayout({ children }) {
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

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Linkbrary from "../public/assets/Linkbrary.png";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <div className="navbar">
          <Link href="/">
            <Image src={Linkbrary} alt="logo" width="200" />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}

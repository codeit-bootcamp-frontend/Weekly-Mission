import "@/styles/global.scss";

export const metadata = {
  title: "Linkbrary",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <div id="modal-portal" />
      </body>
    </html>
  );
}

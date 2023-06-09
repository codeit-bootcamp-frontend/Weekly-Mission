import "@/styles/global.scss";

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

import React from "react";

export default async function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

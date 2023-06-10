"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import PageContainer from "@/app/components/PageContainer/PageContainer";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Session } from "next-auth";

interface LayoutProps {
  children: ReactNode;
  session: Session | null;
}

const Layout = ({ children, session }: LayoutProps) => {
  const segment = useSelectedLayoutSegment();
  if (segment && ["signin", "signup"].includes(segment)) {
    return <>{children}</>;
  }
  return (
    <>
      <Header session={session} />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

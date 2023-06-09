"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";
import PageContainer from "@/app/components/PageContainer/PageContainer";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const segment = useSelectedLayoutSegment();
  if (segment && ["signin", "signup"].includes(segment)) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

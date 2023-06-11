import React, { ReactNode } from "react";
import Gnb from "@/components/Gnb";
import Footer from "@/components/Footer";
import { Children } from "$/types";

const DefaultLayout = ({ children }: Children) => {
  return (
    <div>
      <Gnb />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

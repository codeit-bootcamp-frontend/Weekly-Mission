import React, { ReactNode } from "react";
import Gnb from "@/components/Gnb/Gnb";
import Footer from "@/components/Footer/Footer";
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

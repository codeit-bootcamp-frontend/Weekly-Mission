import React from "react";
import Gnb from "@/components/Gnb";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Gnb />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

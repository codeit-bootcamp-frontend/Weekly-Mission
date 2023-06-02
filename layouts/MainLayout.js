import PropTypes from "prop-types";

import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";

export default function MainLayout({ children }) {
  return (
    <>
      <GNB />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

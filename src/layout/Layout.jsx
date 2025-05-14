import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./layout.scss";

function layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <section className="main">
        <main>{children}</main>
        <Footer />
      </section>
    </div>
  );
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default layout;

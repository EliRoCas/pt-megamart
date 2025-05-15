import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function layout({ children }) {
  return (
    <div className="grid h-screen box-border grid-rows-[auto_1fr_auto]">
      <Header />

      <section className="layout-section overflow-auto min-h-0 flex flex-col">
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

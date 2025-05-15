import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function layout({ children }) {
  return (
    <div className="grid h-screen box-border grid-rows-[auto_1fr_auto]">
      <Header />

      <section className="overflow-auto min-h-0 mx-8 flex flex-col gap-4">
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

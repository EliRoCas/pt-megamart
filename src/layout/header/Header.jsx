import Track from "./track/Track";
import Nav from "./nav/Nav";
import CategoryBar from "./categories/CategoryBar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Track />
      <Nav />
      <CategoryBar />
    </div>
  );
};

export default Header;

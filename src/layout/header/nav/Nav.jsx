import { useState } from "react";
import {
  List,
  MagnifyingGlass,
  User,
  ShoppingCart,
  SlidersHorizontal,
  X,
} from "@phosphor-icons/react";
import "./nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div
          className="menu-icon hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <X
              size={24}
              className="icon"
            />
          ) : (
            <List
              size={24}
              className="icon"
            />
          )}
        </div>
        <h1 className="logo-text">MegaMart</h1>
      </div>

      <div className="search-bar">
        <MagnifyingGlass
          size={18}
          className="icon"
        />
        <input
          type="text"
          placeholder="Search essentials, groceries and more..."
          className="search-input"
        />
        <SlidersHorizontal
          size={18}
          className="icon"
        />
      </div>

      <div className="nav-right">
        <div className="nav-item">
          <User
            size={20}
            className="icon"
          />
          <p>Sign Up/Sign In</p>
        </div>
        <span className="divider" />
        <div className="nav-item">
          <ShoppingCart
            size={20}
            className="icon "
          />
          <p>Cart</p>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="nav-item">
            <MagnifyingGlass
              size={18}
              className="icon"
            />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <SlidersHorizontal
              size={18}
              className="icon"
            />
          </div>
          <div className="nav-item">
            <User
              size={20}
              className="icon"
            />
            <p>Sign Up/Sign In</p>
          </div>
          <div className="nav-item">
            <ShoppingCart
              size={20}
              className="icon"
            />
            <p>Cart</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

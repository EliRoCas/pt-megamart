import { useState, useEffect } from "react";
import getCategories from "../../../services/getCategories";
import { CaretDown, List } from "@phosphor-icons/react";
import "./categoryBar.css";

const CategoryBar = ({ selected, onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false); // estado para toggle

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="category-wrapper">
      <button
        className="category-menu-toggle"
        onClick={() => setShowMenu(!showMenu)}
      >
        <List size={24} className="icon" />
        <span>Categorías</span>
      </button>

      <div
        className={`categories-container ${
          showMenu ? "show" : "hide"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selected === category ? "active" : ""}`}
            onClick={() => {
              onSelect(category);
              setShowMenu(false); 
            }}
          >
            {category} <CaretDown size={12} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

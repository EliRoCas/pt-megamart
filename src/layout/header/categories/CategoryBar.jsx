import { useState, useEffect } from "react";
import getCategories from "../../../services/getCategories";

import { CaretDown } from "@phosphor-icons/react";

import "./categoryBar.css"; 

const CategoryBar = ({ selected, onSelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${selected === category ? "active" : ""}`}
          onClick={() => onSelect(category)}
        >
          {category} <CaretDown size={12} />
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;

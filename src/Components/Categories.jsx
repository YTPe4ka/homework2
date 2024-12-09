import React from "react";
import "../styles/categories.css";

function Categories() {
  const categories = ["Movies", "Music", "Sports", "Gaming", "News"];
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;

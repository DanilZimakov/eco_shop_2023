import React, { useEffect, useState } from "react";
import "./categories.css";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  category_name: string;
  category_image: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getCardColorClass = (index: number) => {
    const colors = ["primary", "secondary", "success", "danger", "warning"];
    return `card border-${colors[index % colors.length]} mb-3`;
  };

  return (
    <div className="card-container">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`animated-card ${getCardColorClass(index)}`}
          style={{ maxWidth: "18rem" }}
        >
          <img
            src={category.category_image}
            className="card-img-top"
            alt={`Image for ${category.category_name}`}
          />
          <div
            className={`card-body text-${index % 2 === 0 ? "dark" : "light"}`}
          >
            <Link to={`/categories/${category.id}`}>
            <h5 className="card-title">{category.category_name}</h5></Link>
            <p className="card-text">
              Категория обещает уникальные и модные товары, соответствующие
              трендам ресайкла и устойчивости.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Categories;

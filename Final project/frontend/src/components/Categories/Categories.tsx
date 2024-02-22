import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Categories: React.FC = () => {
  const { category } = useSelector((store: RootState) => store.categories);

  const getCardColorClass = (index: number) => {
    const colors = ["primary", "secondary", "success", "danger", "warning"];
    return `card border-${colors[index % colors.length]} mb-3`;
  };

  return (
    <div className="q">
      <div className="card-containerr">
        {category.map((category, index) => (
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
              <Link to={`/api/categories/${category.id}`}>
                <h5 className="card-title">{category.category_name}</h5>
              </Link>
              <p className="card-text">
                Категория обещает уникальные и модные товары, соответствующие
                трендам ресайкла и устойчивости.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;

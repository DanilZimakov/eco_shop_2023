import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { SubCategoryType } from "../../../types/sub_category/sub_category";
import "./subStyle.css";

const SubCategories = () => {
  const { categoryId } = useParams();

  const subCategory = useSelector(
    (store: RootState) => store.subCategories.subCategories
  );

  const sub = subCategory.filter(
    (el: SubCategoryType) => el.category_id === Number(categoryId)
  );

  return (
    <div>
      <div className="nav-sub">
        {sub.map((el) => {
          return (
            <Link
              className="link-sub"
              to={`/categories/${categoryId}/posts/${el.id}`}
              key={el.id}
            >
              {el.name}
            </Link>
          );
        })}
        
      </div>
      <Outlet/>
    </div>
  );
};

export default SubCategories;

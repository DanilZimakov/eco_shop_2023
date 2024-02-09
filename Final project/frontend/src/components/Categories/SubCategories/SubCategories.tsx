import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../redux/store";
import { SubCategoryType } from "../../../types/sub_category/sub_category";
import { useEffect } from "react";
import { loadSubCategory } from "../../../redux/subCategorySlice/SubCategory";
import "./subStyle.css"
const SubCategories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadSubCategory());
  }, []);
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
            <Link className="link-sub" to={`/`} key={el.id}>
              {el.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategories;

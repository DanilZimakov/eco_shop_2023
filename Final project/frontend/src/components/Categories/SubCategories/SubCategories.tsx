import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../redux/store";
import { SubCategoryType } from "../../../types/sub_category/sub_category";
import { useEffect } from "react";
import { loadSubCategory } from "../../../redux/subCategorySlice/SubCategory";

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
      {sub.map((el) => {
        return (
          <div key={el.id}>{el.name}</div>
        )
      })}
    </div>
  );
};

export default SubCategories;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";

// import "bulma/css/bulma.min.css";
import "./AddForm.css";
import { addPost } from "../../../redux/Slice/PostsSlice/postsSlice";

import { Compounds } from "../../../types/posts/posts";
import { SubCategoryType } from "../../../types/sub_category/sub_category";
import { loadMaterials } from "../../../redux/Slice/materialsSlice/materialsSlice";

const AddForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadMaterials());
  }, [dispatch]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subCategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [compositions, setCompositions] = useState<Compounds[]>([
    { material: 0, parcent: 0 },
  ]);
  const [weight, setWeight] = useState<string>("");

  const { category } = useSelector((store: RootState) => store.categories);
  const subCategory = useSelector(
    (store: RootState) => store.subCategories.subCategories,
  );
  const { materials } = useSelector((state: RootState) => state.materials);
  const user = useSelector((state: RootState) => state.auth.user);
  const parcents = [
    { id: 1, value: 0 },
    { id: 2, value: 5 },
    { id: 3, value: 10 },
    { id: 4, value: 20 },
    { id: 5, value: 30 },
    { id: 6, value: 40 },
    { id: 7, value: 50 },
    { id: 8, value: 60 },
    { id: 9, value: 70 },
    { id: 10, value: 80 },
    { id: 11, value: 90 },
    { id: 12, value: 100 },
  ];
  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`http://localhost:3000/categories/sub/${selectedCategory}`)
        .then((response) => {
          setSubCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  const handleCompositionChange = (
    index: number,
    field: string,
    value: string | number,
  ) => {
    const updatedCompositions = [...compositions];
    if (field === "material") {
      updatedCompositions[index].material = value as number;
    } else if (field === "percentage") {
      updatedCompositions[index].parcent = Number(value);
    }
    setCompositions(updatedCompositions);
  };

  const addCompositionField = () => {
    setCompositions([...compositions, { material: 0, parcent: 0 }]);
  };

  const removeCompositionField = (index: number) => {
    setCompositions(compositions.filter((_, i) => i !== index));
  };

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSubCategory(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!user) {
      alert("Для добавления поста необходимо войти в систему.");
      return; // Отмена отправки формы, если пользователь не авторизован
    }

    event.preventDefault();
    try {
      dispatch(
        addPost({
          name,
          price,
          description,
          image,
          size,
          weight,
          sub_category_id: +selectedSubCategory,
          materials: compositions,
          user_id: user.id,
          category_id: +selectedCategory,
        }),
      );

      setName("");
      setPrice("");
      setDescription("");
      setSize("");
      setWeight("");
      setCompositions([{ material: 0, parcent: 0 }]);
      setImage("");
      setSubCategories([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <label className="label">Наименование товара:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Цена:</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Описание:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Размер:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={size}
            name="size"
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Вес:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={weight}
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Укажите вес в граммах"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Изображение:</label>
        <div className="control">
          <input
            className="input"
            type="file"
            name="image"
            onChange={handleFileChange}
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              style={{ width: "100px", height: "100px", marginTop: "10px" }}
            />
          )}
        </div>
      </div>

      <div className="field">
        {/* <label className="label dropdown is-active"> */}
        <label className="label">Выбор категории товара:</label>
        <div className="control">
          <div className="select">
            <select
              className="dropdown-trigger"
              // ref={referenceElement}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {subCategories.length > 0 && (
        <div className="field">
          {/* <label className="label dropdown is-active"> */}
          <label className="label">Выбор подкатегории:</label>
          <div className="control">
            <div className="select">
              <select
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
              >
                <option value="">Выберите подкатегорию</option>
                {subCategory
                  .filter((sub) => sub.category_id === Number(selectedCategory))
                  .map((subCategory) => (
                    <option key={subCategory.id} value={subCategory.id}>
                      {subCategory.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      )}
      {compositions.map((composition, index) => (
        <div key={index} className="field">
          <label className="label">Материал:</label>
          <div className="control">
            <div className="select">
              <select
                value={composition.material}
                onChange={(e) =>
                  handleCompositionChange(index, "material", e.target.value)
                }
              >
                <option value="">Выберите материал</option>
                {materials.map((comp) => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="label" style={{ marginTop: "15px" }}>
            Процентное соотношение:
          </label>
          <div className="control">
            <div className="select">
              <select
                name="quantity"
                value={composition.parcent}
                onChange={(e) =>
                  handleCompositionChange(
                    index,
                    "percentage",
                    Number(e.target.value),
                  )
                }
              >
                {parcents.map((value) => (
                  <option key={value.id} value={value.value}>
                    {value.value}%
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            // className="button is-small is-danger"
            type="button"
            onClick={() => removeCompositionField(index)}
          >
            Удалить материал
          </button>
        </div>
      ))}
      <div>
        <button
          // className="button is-info"
          type="button"
          onClick={addCompositionField}
        >
          Добавить материал
        </button>
      </div>
      <div className="control">
        <button
          // className="button is-primary"
          className="btn-form"
          type="submit"
        >
          Отправить форму
        </button>
      </div>
    </form>
  );
};

export default AddForm;

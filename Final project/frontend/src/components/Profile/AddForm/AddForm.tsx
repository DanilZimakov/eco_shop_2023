import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "bulma/css/bulma.min.css";

interface Category {
  id: number;
  category_name: string;
}

interface Subcategories {
  id: number;
  name: string;
}
interface Compouds {
  material_id: string;
  parcent: number;
}

const AddForm = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subCategories, setSubCategories] = useState<Subcategories[]>([]);

  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const referenceElement = useRef(null);

  const [compositions, setCompositions] = useState<Compouds[]>([
    { material_id: "", parcent: 0 },
  ]);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories/")
      .then((response) => {
        setCategories(response.data);
        console.log("setCategories", response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`http://localhost:3000/categories/sub/${selectedCategory}`)
        .then((response) => {
          setSubCategories(response.data);
          console.log("setSubCategories", response.data);
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });

      console.log("selectedCategory", selectedCategory);
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "size":
        setSize(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  const handleCompositionChange = (
    index: number,
    field: string,
    value: string | number,
  ) => {
    const updatedCompositions = [...compositions];
    if (field === "material") {
      updatedCompositions[index].material_id = value as string;
    } else if (field === "percentage") {
      updatedCompositions[index].parcent = Number(value);
    }
    setCompositions(updatedCompositions);
  };

  const addCompositionField = () => {
    setCompositions([...compositions, { material_id: "", parcent: 0 }]);
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
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/posts/add",
        {
          name,
          price,
          description,
          image,
          size,
          sub_category_id: selectedSubCategory,
          materials: compositions,
          user_id: user?.id,
          category_id: selectedCategory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Form submission response:", response.data);

      setName("");
      setPrice("");
      setDescription("");
      setSize("");
      setCompositions([{ material_id: "", parcent: 0 }]);
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
    <form onSubmit={handleSubmit}>
      <label>
        Наименование товара:
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
        />
      </label>

      <label>
        Цена:
        <input
          type="number"
          value={price}
          name="price"
          onChange={handleInputChange}
        />
      </label>

      <label>
        Описание:
        <input
          type="text"
          value={description}
          name="description"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Размер
        <input
          value={size}
          type="number"
          name="size"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Изображение:
        <input type="file" name="image" onChange={handleFileChange} />
      </label>
      {image && (
        <img
          src={image}
          alt="Preview"
          style={{ width: "100px", height: "100px" }}
        />
      )}
      <label className="dropdown is-active">
        Выбор категории товара:
        <select
          className="dropdown-trigge"
          ref={referenceElement}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Выберите категорию</option>
          {categories.map((category) => (
            <option
              className="dropdown-item"
              key={category.id}
              value={category.id}
              style={{
                color: "black",
              }}
            >
              {category.category_name}
            </option>
          ))}
        </select>
      </label>

      {subCategories.length > 0 && (
        <label className="dropdown is-active">
          Выбор подкатегории:
          <select
            className="dropdown-trigger"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="">Выберите подкатегорию</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory.id} value={subCategory.id}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </label>
      )}

      {compositions.map((composition, index) => (
        <div key={index}>
          <label>
            Материал:
            <select
              value={composition.material_id}
              onChange={(e) =>
                handleCompositionChange(index, "material", e.target.value)
              }
            >
              <option value="">Выберите материал</option>
              <option value="cotton">Хлопок</option>
              <option value="viscose">Вискоза</option>
              <option value="polyester">Полиэстер</option>
            </select>
          </label>
          <label>
            Процентное соотношение:
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
              {[0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
                <option key={value} value={value}>
                  {value}%
                </option>
              ))}
            </select>
          </label>
          <button type="button" onClick={() => removeCompositionField(index)}>
            Удалить материал
          </button>
        </div>
      ))}
      <button type="button" onClick={addCompositionField}>
        Добавить материал
      </button>
      <button type="submit">Отправить форму</button>
    </form>
  );
};

export default AddForm;

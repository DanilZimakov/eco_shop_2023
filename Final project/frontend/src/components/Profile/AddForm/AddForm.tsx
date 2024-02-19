import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./AddForm.css";

interface Category {
  id: number;
  category_name: string;
}

interface Subcategories {
  id: number;
  name: string;
}
interface Compounds {
  id: number;
  material: string;
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
  const [compositions, setCompositions] = useState<Compounds[]>([
    { id: 0, material: "", parcent: 0 },
  ]);
  const [selectedMaterial] = useState<string>("");
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories/")
      .then((response) => {
        setCategories(response.data);
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
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/materials")
      .then((response) => {
        setCompositions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching materials:", error);
      });
  }, [selectedMaterial]);

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
      updatedCompositions[index].material = value as string;
    } else if (field === "percentage") {
      updatedCompositions[index].parcent = Number(value);
    }
    setCompositions(updatedCompositions);
  };

  const addCompositionField = () => {
    setCompositions([...compositions, { id: 0, material: "", parcent: 0 }]);
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
      setCompositions([{ id: 0, material: "", parcent: 0 }]);
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Размер:</label>
        <div className="control">
          <input
            className="input"
            type="number"
            value={size}
            name="size"
            onChange={handleInputChange}
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
              ref={referenceElement}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Выберите категорию</option>
              {categories.map((category) => (
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
                {subCategories.map((subCategory) => (
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
                {compositions.map((comp) => (
                  <option key={comp.id} value={comp.material}>
                    {comp.material}
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
                {[0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(
                  (value) => (
                    <option key={value} value={value}>
                      {value}%
                    </option>
                  ),
                )}
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

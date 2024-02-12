import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { CategoriesType } from "../../../types/categories/categories";

const AddForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [compositions, setCompositions] = useState([
    { material: "", percentage: 0 },
  ]);
  

  const user = useSelector((state: RootState) => state.auth.user);
  const categories = useSelector((state: RootState) => state.categories.category)
  
  

  const [category, setCategory] = useState('')
  console.log(category);

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
      case "image":
        setImage(value);
        break;
      case "size":
        setSize(value);
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
    } else {
      updatedCompositions[index].percentage = Number(value);
    }
    setCompositions(updatedCompositions);
  };

  const addCompositionField = () => {
    setCompositions([...compositions, { material: "", percentage: 0 }]);
  };

  const removeCompositionField = (index: number) => {
    setCompositions(compositions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    try {
      const response = await axios.post("http://localhost:3000/posts/add", {
        name,
        price,
        description,
        image,
        size,
        materials: compositions,
        user_id: user?.id,
        category_id: Number(category),
      });
      console.log("Form submission response:", response.data);
      console.log("Отправляемые данные", {
        name,
        price,
        description,
        image,
        size,
        materials: compositions,
        user_id: user?.id,
      });

      setName("");
      setPrice("");
      setDescription("");
      setImage("");
      setSize("");
      setCompositions([{ material: "", percentage: 0 }]);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Наименование товара:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Цена:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Описание:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Изображение:
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Размер:
        <input
          type="text"
          name="size"
          value={size}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Выбор категории товара:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Выберите категорию</option>
            {categories.map((el) => <option value={el.id} key={el.id}>
              {el.category_name}
              </option>)}
          </select>
      </label>

      {compositions.map((composition, index) => (
        <div key={index}>
          <label>
            Материал:
            <select
              value={composition.material}
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
              value={composition.percentage}
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
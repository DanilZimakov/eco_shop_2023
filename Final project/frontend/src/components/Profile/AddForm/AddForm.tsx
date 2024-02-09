import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// // Функция для создания элементов выбора процента
// const createPercentOptions = () => {
//   const options = [];
//   for (let i =  10; i <=  100; i +=  10) {
//     options.push(<option key={i} value={i}>{i}%</option>);
//   }
//   return options;
// // AddForm.tsx
// import axios from "axios";
// import React, { useState, ChangeEvent } from "react";

// interface AddFormProps {
//   onSubmit: (data: {
//     productName: string;
//     productType: string;
//     gender: string;
//     compositions: Array<{ material: string; quantity: number }>;
//   }) => void;
//   image: File | null;
// }

// const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
//   const [productName, setProductName] = useState("");
//   const [productType, setProductType] = useState("");
//   const [gender, setGender] = useState("");
//   const [compositions, setCompositions] = useState([
//     { material: "", quantity: 0 },
//   ]);

//   const [image, setImage] = useState<File | null>(null);

//   const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     try {
//       const formData = new FormData();
//       if (event.target.files && event.target.files[0]) {
//         formData.append("image", event.target.files[0]);
//         const res = await axios.post(
//           "http://localhost:3000/user-profile",
//           formData,
//         );
//         console.log("Фотография успешно загружена:", res.data);
//       }
//     } catch (error) {
//       console.log("Ошибка отправки фотографии:", error);
//     }
//   };

//   const handleMaterialChange = (
//     event: ChangeEvent<HTMLSelectElement>,
//     index: number,
//   ) => {
//     const { value } = event.target;
//     const newCompositions = [...compositions];
//     newCompositions[index].material = value;
//     setCompositions(newCompositions);
//   };

//   const handleInputChange = (
//     event: ChangeEvent<HTMLSelectElement>,
//     index: number,
//   ) => {
//     const { name, value } = event.target;
//     const newCompositions = [...compositions];
//     if (name === "quantity") {
//       newCompositions[index][name] = Number(value);
//     } else {
//       newCompositions[index][name] = value;
//     }
//     setCompositions(newCompositions);
//   };

//   const addCompositionField = () => {
//     setCompositions([...compositions, { material: "", quantity: 0 }]);
//   };
//   const removeCompositionField = (index: number) => {
//     setCompositions(compositions.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData(); // Использование FormData для отправки файлов и данных формы
//     formData.append("productName", productName);
//     formData.append("productType", productType);
//     formData.append("gender", gender);
//     compositions.forEach((comp, index) => {
//       formData.append(`compositions[${index}][material]`, comp.material);
//       formData.append(
//         `compositions[${index}][quantity]`,
//         comp.quantity.toString(),
//       );
//     });
//     if (image) {
//       formData.append("image", image); // Добавление файла изображения
//     }

//     try {
//       const res = await axios.post("http://localhost:3000/cart", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Данные отправлены:  ", res.data);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//     onSubmit({ productName, productType, gender, compositions }); // Может потребоваться обновление для включения изображения
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Форма добавления товара</h2>
//       <label>
//         Название товара:
//         <input
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//       </label>
//       <label>
//         Тип товара:
//         <select
//           value={productType}
//           onChange={(e) => setProductType(e.target.value)}
//         >
//           <option value="">Выберите тип товара</option>
//           <option value="clothing">Одежда</option>
//           <option value="footwear">Обувь</option>
//         </select>
//       </label>
//       <label>
//         Пол:
//         <select value={gender} onChange={(e) => setGender(e.target.value)}>
//           <option value="">Выберите пол</option>
//           <option value="male">Мужской</option>
//           <option value="female">Женский</option>
//         </select>
//       </label>

//       <label>
//         Фотография товара:
//         <input type="file" onChange={handleFileChange} />
//       </label>
//       {compositions.map((comp, index) => (
//         <div key={index}>
//           <label>
//             Материал:
//             <select
//               value={comp.material}
//               onChange={(e) => handleMaterialChange(e, index)}
//             >
//               <option value="">Выберите материал</option>
//               <option value="cotton">Хлопок</option>
//               <option value="viscose">Вискоза</option>
//               <option value="polyester">Полиэстер</option>
//             </select>
//           </label>
//           <label>
//             Процентное соотношение:
//             <select
//               name="quantity"
//               value={comp.quantity}
//               onChange={(e) => handleInputChange(e, index)}
//             >
//               {[0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
//                 <option key={value} value={value}>
//                   {value}%
//                 </option>
//               ))}
//             </select>
//           </label>

//           <button type="button" onClick={() => removeCompositionField(index)}>
//             Удалить материал
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={addCompositionField}>
//         Добавить материал
//       </button>
//       <button type="submit">Отправить на публикацию</button>
//     </form>
//   );
// };

function AddForm(): JSX.Element {
  // Создание состояний для каждого поля формы
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [percentage, setPercentage] = useState(10);

  // Обработчик изменения значений полей
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
      case "material":
        setMaterial(value);
        break;
      case "percentage":
        setPercentage(Number(value));
        break;
      default:
        break;
    }
  };

  const user = useSelector((store: RootState) => store.auth.user);

  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3000/posts/add", {
      name,
      price,
      description,
      image,
      size,
      material,
      percentage,
      user_id: user?.id,
    });
    return res.data;
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
        Материал:
        <select name="material" value={material} onChange={handleInputChange}>
          <option value="хлопок">Хлопок</option>
          <option value="вискоза">Вискоза</option>
          <option value="полиэстер">Полиэстер</option>
          <option value="шелк">Шелк</option>
          <option value="шерсть">Шерсть</option>
        </select>
      </label>
      <label>
        Процентное содержание:
        <select
          name="percentage"
          value={percentage}
          onChange={handleInputChange}
        >
          {createPercentOptions()}
        </select>
      </label>
      <button type="submit">Отправить форму</button>
    </form>
  );
}

export default AddForm;

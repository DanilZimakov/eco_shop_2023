// AddForm.tsx
import React, { useState, ChangeEvent } from 'react';

interface AddFormProps {
  onSubmit: (data: { productName: string, productType: string, gender: string, compositions: Array<{ material: string, quantity: number }> }) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [gender, setGender] = useState("");
  const [compositions, setCompositions] = useState([{ material: "", quantity:  0 }]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = event.target;
    const newCompositions = [...compositions];
    newCompositions[index][name] = value;
    setCompositions(newCompositions);
  };

  const handleMaterialChange = (event: ChangeEvent<HTMLSelectElement>, index: number) => {
    const { value } = event.target;
    const newCompositions = [...compositions];
    newCompositions[index].material = value;
    setCompositions(newCompositions);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const newCompositions = [...compositions];
    newCompositions[index].quantity = Number(value);
    setCompositions(newCompositions);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ productName, productType, gender, compositions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Форма добавления товара</h2>
      <label>
        Название товара:
        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
      </label>
      <label>
        Тип товара:
        <select value={productType} onChange={e => setProductType(e.target.value)}>
          <option value="">Выберите тип товара</option>
          <option value="clothing">Одежда</option>
          <option value="footwear">Обувь</option>
        </select>
      </label>
      <label>
        Пол:
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </label>
      {compositions.map((comp, index) => (
        <div key={index}>
          <label>
            Материал:
            <select value={comp.material} onChange={e => handleMaterialChange(e, index)}>
              <option value="">Выберите материал</option>
              <option value="cotton">Хлопок</option>
              <option value="viscose">Вискоза</option>
              <option value="polyester">Полиэстер</option>
            </select>
          </label>
          <label>
            Количество:
            <input type="number" value={comp.quantity} onChange={e => handleQuantityChange(e, index)} min="1" max="100" />
          </label>
        </div>
      ))}
      <button type="submit">Отправить на публикацию</button>
    </form>
  );
};

export default AddForm;

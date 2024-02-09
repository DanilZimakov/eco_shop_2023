import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

// Функция для создания элементов выбора процента
const createPercentOptions = () => {
  const options = [];
  for (let i =  10; i <=  100; i +=  10) {
    options.push(<option key={i} value={i}>{i}%</option>);
  }
  return options;
};


function AddForm (): JSX.Element {
  // Создание состояний для каждого поля формы
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [material, setMaterial] = useState('');
  const [percentage, setPercentage] = useState(10);

  // Обработчик изменения значений полей
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'size':
        setSize(value);
        break;
      case 'material':
        setMaterial(value);
        break;
      case 'percentage':
        setPercentage(Number(value));
        break;
      default:
        break;
    }
  };

  const user = useSelector((store: RootState) => store.auth.user)

  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await axios.post('http://localhost:3000/products/add', {
      name, price, description, image, size, material, percentage, user_id: user?.id
    })
    return res.data
    };

  
  return (
    <form onSubmit={handleSubmit}> 
      <label>
        Наименование товара:
        <input type="text" name="name" value={name} onChange={handleInputChange} />
      </label>
      <label>
        Цена:
        <input type="number" name="price" value={price} onChange={handleInputChange} />
      </label>
      <label>
        Описание:
        <input type="text" name="description" value={description} onChange={handleInputChange} />
      </label>
      <label>
        Изображение:
        <input type="text" name="image" value={image} onChange={handleInputChange} />
      </label>
      <label>
        Размер:
        <input type="text" name="size" value={size} onChange={handleInputChange} />
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
        <select name="percentage" value={percentage} onChange={handleInputChange}>
          {createPercentOptions()}
        </select>
      </label>
      <button type="submit">Отправить форму</button>
    </form>
  );
}

export default AddForm;

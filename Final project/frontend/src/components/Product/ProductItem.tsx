import React from 'react';
import styles from './ProductItem.module.css'; // Импортируем стили

interface ProductProps {
  image: string;
  name: string;
  price: string;
  description: string;
  size: string;
  material: string;
  percentage: number;
}

const ProductItem: React.FC<ProductProps> = ({
  image,
  name,
  price,
  description,
  size,
  material,
  percentage,
}) => {
  return (
    <div className={styles.productCard}> {/* Применяем класс стиля */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Цена: {price}</p>
      <p>Описание: {description}</p>
      <p>Размер: {size}</p>
      <p>Материал: {material}</p>
      <p>Процентное содержание: {percentage}%</p>
    </div>
  );
};

export default ProductItem;

import React from 'react';
import './ProductItem.css';
import { RootState } from "..//..//redux/store";
import { useSelector } from "react-redux";

function ProductItem():JSX.Element {
  const {posts} = useSelector((store:RootState) => store.posts)
  const {user} = useSelector((store: RootState) => store.auth)
  const FilterUserPost = posts.filter(el => el.user_id === user?.id)
  
  return (
    <div>
      {FilterUserPost.map(el =>
        <div key={el.id} className="product-card">
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>Цена: {el.price}</p>
          <p>Описание: {el.description}</p>
          <p>Размер: {el.size}</p>
          <button onClick={() => handleDelete(el.id)}>Удалить публикацию</button>
          <button onClick={() => handleEdit(el.id)}>Изменить публикацию</button>
        </div>
       )}
    </div>
  )
}

export default ProductItem


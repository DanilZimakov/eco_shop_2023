import React from 'react';
import './ProductItem.css';
import { RootState, useAppDispatch } from "..//..//redux/store";
import { useSelector } from "react-redux";
import { deletePost } from '../../redux/PostsSlice/postsSlice';

function ProductItem():JSX.Element {
  const {posts} = useSelector((store:RootState) => store.posts)
  const {user} = useSelector((store: RootState) => store.auth)
  const dispatch = useAppDispatch();
  const FilterUserPost = posts.filter(el => el.user_id === user?.id)

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  // const handleEdit = (postId: string) => {
  //   dispatch(editProduct(postId));
  // };
  
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


import React from "react";
import "./ProductItem.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LikeButton from "../LikeButton/LikeButton";

function ProductItem(): JSX.Element {
  const { posts } = useSelector((store: RootState) => store.posts);
  const { user } = useSelector((store: RootState) => store.auth);
  const FilterUserPost = posts.filter((el) => el.user_id === user?.id);

  // Предполагаемая реализация функций handleDelete и handleEdit
  const handleDelete = (postId: number) => {
    // Логика удаления поста
    console.log(`Deleting post with ID ${postId}`);
  };

  const handleEdit = (postId: number) => {
    // Логика редактирования поста
    console.log(`Editing post with ID ${postId}`);
  };

  return (
    <div>
      {FilterUserPost.map((el) => (
        <div key={el.id} className="product-card">
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>Цена: {el.price}</p>
          <p>Описание: {el.description}</p>
          <p>Размер: {el.size}</p>
          <button onClick={() => handleDelete(el.id)}>
            Удалить публикацию
          </button>
          <button onClick={() => handleEdit(el.id)}>Изменить публикацию</button>
          <LikeButton postId={el.id} categoryId={0} />
        </div>
      ))}
    </div>
  );
}

export default ProductItem;

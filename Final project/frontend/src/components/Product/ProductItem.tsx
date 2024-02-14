import "./ProductItem.css";
import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "..//..//redux/store";
import { useSelector } from "react-redux";
import { deletePost } from "../../redux/Slice/PostsSlice/postsSlice";
import { CategoryId } from "../../types/categories/categories";
import LikeButton from "../LikeButton/LikeButton";
import { PostEditType, PostType } from "../../types/posts/posts";
import Modal from "../Modal/Modal";

function ProductItem(): JSX.Element {
  const { posts } = useSelector((store: RootState) => store.posts);
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const FilterUserPost = posts.filter(
    (el: PostType) => el.user_id === user?.id,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<PostEditType | null>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  const handleDelete = (id: CategoryId) => {
    dispatch(deletePost(id));
  };

  // const handleEdit = (postId: number) => {
  //   dispatch(editProduct({ id: postId.toString(), changes: {} }));
  // };

  const handleEdit = (post: PostEditType) => {
    setEditingPost(post);
    setEditingPostId(post.id);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
    setEditingPostId(null);
  };

  return (
    <div>
      {FilterUserPost.map((el: PostType) => (
        <div key={el.id} className="product-card">
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>Цена: {el.price}</p>
          <p>Описание: {el.description}</p>
          <p>Размер: {el.size}</p>

          <div>
            <button onClick={() => handleDelete(el.id)}>
              Удалить публикацию
            </button>
          </div>
          <div>
            <button onClick={() => handleEdit()}>Изменить публикацию</button>
          </div>
          {isModalOpen && editingPost && (
            <Modal
              isOpen={isModalOpen}
              post={editingPost}
              onRequestClose={handleCloseModal}
            />
          )}
          <div>
            <LikeButton postId={el.id} categoryId={0} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductItem;

import "./ProductItem.css";
import { useState } from "react";
import { RootState, useAppDispatch } from "..//..//redux/store";
import { useSelector } from "react-redux";
import { deletePost } from "../../redux/Slice/PostsSlice/postsSlice";
import { CategoryId } from "../../types/categories/categories";
import LikeButton from "../LikeButton/LikeButton";
import { PostEditType, PostType } from "../../types/posts/posts";
import Modal from "../Modal/Modal";
import { HarmType } from "../../types/harm/harm";

function ProductItem(): JSX.Element {
  const { posts } = useSelector((store: RootState) => store.posts);
  const { user } = useSelector((store: RootState) => store.auth);
  const { harm } = useSelector((store: RootState) => store.harm);
  const dispatch = useAppDispatch();
  const FilterUserPost = posts.filter(
    (el: PostType) => el.user_id === user?.id && el.publich === true,
  );

  const [modalState, setModalState] = useState<{ [key: number]: boolean }>({});
  const [editingPost, setEditingPost] = useState<PostEditType | null>(null);

  const handleDelete = (id: CategoryId) => {
    dispatch(deletePost(id));
  };

  const handleEdit = (postId: number) => {
    const postToEdit = posts.find((post) => post.id === postId);
    if (postToEdit) {
      setEditingPost(postToEdit);
      setModalState({ ...modalState, [postId]: true });
    }
  };

  const handleCloseModal = () => {
    setModalState({});
    setEditingPost(null);
  };

  return (
    <div className="products-all">
      {FilterUserPost.map((el: PostType) => {
        const harmSearch = harm.find(
          (harm: HarmType) => harm.post_id === el.id,
        );
        const color = harmSearch ? harmSearch.color : "none";
        return (
          <div
            key={el.id}
            className="product-card"
            style={{
              background: "#F5F6EF",
              border: color ? `1px solid ${color}` : "none",
            }}
          >
            <img src={el.image} alt={el.name} />
            <h3>{el.name}</h3>
            <p>Цена: {el.price}</p>
            <p>Описание: {el.description}</p>
            <p>Размер: {el.size}</p>

            <div className="card-buttons">
              <button
                className="card-button"
                onClick={() => handleDelete(el.id)}
              >
                Удалить публикацию
              </button>
              <button className="card-button" onClick={() => handleEdit(el.id)}>
                Изменить публикацию
              </button>
            </div>
            {modalState[el.id] && editingPost && (
              <Modal
                isOpen={true}
                post={editingPost as PostType}
                onRequestClose={handleCloseModal}
              />
            )}
            <div className="like-status">
              <LikeButton postId={el.id} categoryId={0} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProductItem;

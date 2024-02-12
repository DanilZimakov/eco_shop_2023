import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { OPEN_MODAL, CLOSE_MODAL } from "../../redux/modalSlice/modalSlice";
import axios from "axios";
import { PostType } from "../../types/posts/posts";

const Favorites: React.FC = () => {
  const [favoritePosts, setFavoritePosts] = useState<PostType[]>([]);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modal.modal);

  useEffect(() => {
    dispatch(OPEN_MODAL());
    fetchFavorites();

    return () => {
      dispatch(CLOSE_MODAL());
    };
  }, [dispatch]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get("http://localhost:3000/favorites/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFavoritePosts(response.data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      setFavoritePosts([]);
    }
  };

  const handleClose = () => {
    dispatch(CLOSE_MODAL());
  };

  return (
    <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content">
        Отображение избранных постов
        {favoritePosts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.name} />
            <h3>{post.name}</h3>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.size}</p>
            <button>Add</button>
          </div>
        ))}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClose}
      />
    </div>
  );
};

export default Favorites;

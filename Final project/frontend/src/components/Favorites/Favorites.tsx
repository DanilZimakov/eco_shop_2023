import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostType } from "../../types/posts/posts";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";
import "./favorite.css";
import cart from "./cart.png";
import crest from "./crest.png";

const Favorites: React.FC = () => {
  const [favoritePosts, setFavoritePosts] = useState<PostType[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFavorites();
  }, []);

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

  const handleAddClick = async (post: PostType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token or user id is missing.");
        return;
      }

      const addToCartResponse = await axios.post(
        `http://localhost:3000/cart/add`,
        { post_id: post.id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (
        addToCartResponse.status === 200 ||
        addToCartResponse.status === 201
      ) {
        console.log("Item added to cart:", addToCartResponse.data);

        const removeFromFavoritesResponse = await axios.delete(
          `http://localhost:3000/favorites/${post.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (removeFromFavoritesResponse.status === 200) {
          setFavoritePosts(
            favoritePosts.filter((favoritePost) => favoritePost.id !== post.id)
          );

          dispatch(
            addItem({
              ...post,
              quantity: 1,
              post: {
                id: 0,
                name: "",
                price: 0,
                description: "",
                image: "",
                size: "",
                publich: false,
                user_id: 0,
                category_id: 0,
                sub_category_id: 0,
              },
            })
          );
        }
      }
    } catch (error) {
      console.error(
        "Error adding item to cart or removing from favorites:",
        error
      );
    }
  };

  const removeFavorite = async (post: PostType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token is missing.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:3000/favorites/${post.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setFavoritePosts(
          favoritePosts.filter((favoritePost) => favoritePost.id !== post.id)
        );
      }
    } catch (error) {
      console.error("Error removing item from favorites:", error);
    }
  };

  return (
    <div className="q">
      <div className="favorites-container">
        {favoritePosts.map((post) => (
          <div key={post.id} className="favorite-card">
            <img src={post.image} alt={post.name} className="favorite-image" />
            <h3>{post.name}</h3>
            <p>Цена: ₽{post.price}</p>
            {/* <p>Description: {post.description}</p> */}
            <p>Цена: {post.size}</p>
            <div className="action-buttons">
              <img
                className="img1"
                src={cart}
                alt="Add to Cart"
                onClick={() => handleAddClick(post)}
              />
              <img
                className="img2"
                src={crest}
                alt="Remove from Favorites"
                onClick={() => removeFavorite(post)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;

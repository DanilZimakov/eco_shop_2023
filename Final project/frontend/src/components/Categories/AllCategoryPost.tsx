import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";
import { HarmType } from "../../types/harm/harm";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";
import cart from "./cart.png";
import axios from "axios";

function AllCategoryPost() {
  const { categoryId } = useParams();
  const { posts } = useSelector((s: RootState) => s.posts);

  // const fillPost = posts.filter(
  //   (el: PostType) => el.category_id === Number(categoryId),
  // );

  const fillPost = Array.isArray(posts)
    ? posts.filter((el: PostType) => el.category_id === Number(categoryId))
    : [];

  const { harm } = useSelector((s: RootState) => s.harm);
  const dispatch = useAppDispatch();
  const handleAddClick = async (post: PostType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token or user id is missing.");
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/api/cart/add`,
        { post_id: post.id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Item added to cart:", response.data);
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
            weight: "",
            createdAt: undefined,
            updatedAt: undefined,
          },
        }),
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };
  return (
    <div className="product-card-container">
      {fillPost.map((post: PostType) => {
        const harmSearch = harm.find(
          (harm: HarmType) => harm.post_id === post.id,
        );
        const color = harmSearch ? harmSearch.color : "none";
        return (
          <div
            key={post.id}
            className="product-card"
            style={{ border: color ? `3px solid ${color}` : "none" }}
          >
            {post.image && post.image.length > 0 && (
              <img src={post.image} alt={post.name} />
            )}
            <h3>{post.name}</h3>
            <p>Цена: {post.price}.Руб</p>
            {/* <p>Описание: {post.description}</p> */}
            <p>Размер: {post.size}</p>
            <p>Рекомендации: {harmSearch?.message}</p>
            <p>Экологическая оценка: {harmSearch?.ecoStatus}</p>
            <div>
              <LikeButton postId={post.id} categoryId={Number(categoryId)} />
              <div className="add" onClick={() => handleAddClick(post)}>
                <img className="a" src={cart} alt="Add to Cart" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllCategoryPost;

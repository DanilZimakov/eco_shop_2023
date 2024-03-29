import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import "./PostPage.css";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";
import axios from "axios";
import { PostType } from "../../types/posts/posts";
import { HarmType } from "../../types/harm/harm";

// import cart from "./cart.png";
import cart from "./cart.png";

const PostPage: React.FC = () => {
  const { categoryId, postId } = useParams();
  const posts = useSelector((store: RootState) => store.posts.posts);
  const { harm } = useSelector((store: RootState) => store.harm);
  const dispatch = useDispatch();

  function fillPost(posts: PostType[]) {
    return posts.filter(
      (post) =>
        post.category_id === Number(categoryId) &&
        post.sub_category_id === Number(postId) &&
        post.publich === true,
    );
  }
  const filteredPosts = fillPost(posts);

  const handleAddClick = async (post: PostType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token or user id is missing.");
        return;
      }

      const response = await axios.post(
        `https://swap-style-eco.shop/api/cart/add`,
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
          id: post.id,
          post,
          quantity: 1,
          name: "",
          price: 0,
          description: "",
          image: "",
          size: "",
          publich: false,
          user_id: 0,
          category_id: 0,
          sub_category_id: 0,
          createdAt: undefined,
          updatedAt: undefined,
          weight: "",
        }),
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="product-card-container">
      {filteredPosts.map((post: PostType) => {
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
            <p>Цена: {post.price} ₽</p>
            {/* <p>Описание: {post.description}</p> */}
            <p>Размер: {post.size}</p>
            <p>
              <b>Экологическая оценка:</b> {harmSearch?.ecoStatus}
            </p>
            <p>
              <b>Рекомендации: </b>
              {harmSearch?.message}
            </p>
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
};

export default PostPage;

import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import "./PostPage.css";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";
import axios from "axios";
import { PostType } from "../../types/posts/posts";

const PostPage: React.FC = () => {
  const { categoryId, postId } = useParams();
  const posts = useSelector((store: RootState) => store.posts.posts);

  const dispatch = useDispatch();

  const filteredPosts = posts.filter(
    (post) =>
      post.category_id === Number(categoryId) &&
      post.sub_category_id === Number(postId),
  );

  const handleAddClick = async (post: PostType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Authentication token or user id is missing.");
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/cart/add`,
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
          },
        }),
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="product-card">
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            <img src={post.image} alt={post.name} />
            <h3>{post.name}</h3>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.size}</p>
            <div className="buttons">
              <LikeButton postId={post.id} categoryId={Number(categoryId)} />
              <button
                className="bis-primary is-small"
                onClick={() => handleAddClick(post)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;

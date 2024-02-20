import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import "./PostPage.css";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";
import axios from "axios";
import { PostType } from "../../types/posts/posts";
import { HarmType } from "../../types/harm/harm";

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
        post.publich === true
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
        `http://localhost:3000/cart/add`,
        { post_id: post.id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
        })
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="product-card">
      {filteredPosts.map((post: PostType) => {
        const harmSearch = harm.find(
          (harm: HarmType) => harm.post_id === post.id
        );
        const color = harmSearch ? harmSearch.color : "none";
        return (
          <div
            key={post.id}
            style={{ border: color ? `1px solid ${color}` : "none" }}
          >
            {post.image && post.image.length > 0 && (
              <img
                style={{ width: "200px", height: "200px" }}
                src={post.image}
                alt={post.name}
              />
            )}
            <h3>Название: {post.name}</h3>
            <p>Цена: {post.price}.Руб</p>
            <p>Описание: {post.description}</p>
            <p>Размер: {post.size}</p>
            <div>
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

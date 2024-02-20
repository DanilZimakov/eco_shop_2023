import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostType } from "../../../types/posts/posts";
import LikeButton from "../../LikeButton/LikeButton";
import "./postpage.css";
import { addItem } from "../../../redux/Slice/cartSlice/cartSlice";
import cart from "./cart.png";
function PostPage() {
  const { categoryId, postId } = useParams();
  const { posts } = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();

  function fillPost(posts: PostType[]) {
    return posts.filter(
      (post) =>
        post.category_id === Number(categoryId) &&
        post.sub_category_id === Number(postId)
    );
  }

  const filteredPosts = fillPost(posts);

  const handleAddClick = (post) => {
    dispatch(addItem(post));
  };

  return (
    <div className="product-card-container">
      {filteredPosts.map((post) => (
        <div key={post.id} className="product-card">
          <div className="product-card-image">
            {post.image && post.image.length > 0 && (
              <img src={post.image} alt={post.name} />
            )}
          </div>
          <div className="product-card-details">
            <h3> {post.name}</h3>
            <p>Цена: {post.price}.Руб</p>
            {/* <p>Описание: {post.description}</p> */}
            <p>Размер: {post.size}</p>
          </div>
          <div className="product-card-buttons">
            <LikeButton postId={post.id} categoryId={Number(categoryId)} />
            <div className="add ">
              <img
                className="a"
                src={cart}
                alt="Add"
                onClick={() => handleAddClick(post)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostPage;

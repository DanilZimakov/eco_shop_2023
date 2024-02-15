import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";
import "./PostPage.css";
import { addItem } from "../../redux/Slice/cartSlice/cartSlice";

function PostPage() {
  const { categoryId, postId } = useParams();
  const { posts } = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();

  function fillPost(posts: PostType[]) {
    return posts.filter(
      (post) =>
        post.category_id === Number(categoryId) &&
        post.sub_category_id === Number(postId),
    );
  }

  const filteredPosts = fillPost(posts);

  const handleAddClick = (post) => {
    dispatch(addItem(post));
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
}

export default PostPage;

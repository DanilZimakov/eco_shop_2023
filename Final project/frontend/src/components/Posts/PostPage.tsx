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
  console.log(posts);
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

  const handleAddClick = (post: PostType) => {
    dispatch(addItem(post));
  };

  return (
    <div className="product-card">
      {filteredPosts.map((post:PostType) => {
        return (
          <div key={post.id}>
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
}

export default PostPage;

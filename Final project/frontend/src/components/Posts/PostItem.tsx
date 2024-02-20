import {
  deletePost,
  publichPost,
} from "../../redux/Slice/PostsSlice/postsSlice";
import { useAppDispatch } from "../../redux/store";
import { CategoryId } from "../../types/categories/categories";
import { PostId, PostType } from "../../types/posts/posts";
import { harmAdd } from "../../redux/Slice/harmSlice/harmSlice";

const PostItem = ({ post, color }: { post: PostType; color: string }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: CategoryId) => {
    dispatch(deletePost(id));
  };
  const handlerPostVisible = (id: PostId) => {
    dispatch(publichPost(id));
  };
  const handlerHarmVisible = (id: PostId) => {
    dispatch(harmAdd(id));
  };

  return (
    <div
      className="product-card"
      style={{ border: color ? `1px solid ${color}` : "none" }}
    >
      <img src={post.image} alt={post.name} />
      <h3>{post.name}</h3>
      <p>Цена: {post.price}</p>
      <p>Описание: {post.description}</p>
      <p>Размер: {post.size}</p>
      <button className="btn" onClick={() => handlerPostVisible(post.id)}>
        ✅
      </button>
      <button className="btn" onClick={() => handleDelete(post.id)}>
        ❌
      </button>
      <button className="btn" onClick={() => handlerHarmVisible(post.id)}>
        ♻️
      </button>
    </div>
  );
};

export default PostItem;

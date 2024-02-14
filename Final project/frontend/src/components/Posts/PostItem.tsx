import {
  deletePost,
  publichPost,
} from "../../redux/Slice/PostsSlice/postsSlice";
import { useAppDispatch } from "../../redux/store";
import { CategoryId } from "../../types/categories/categories";
import { PostId, PostType } from "../../types/posts/posts";

function PostItem({ post }: { post: PostType }) {
  const dispatch = useAppDispatch();
  const handleDelete = (id: CategoryId) => {
    dispatch(deletePost(id));
  };
  const handlerPostVisible = (id: PostId) => {
    dispatch(publichPost(id));
  };

  return (
    <div className="product-card">
      <img src={post.image} alt={post.name} />
      <h3>{post.name}</h3>
      <p>Цена: {post.price}</p>
      <p>Описание: {post.description}</p>
      <p>Размер: {post.size}</p>
      <h1>{post.publich.toString()}</h1>
      <button onClick={() => handleDelete(post.id)}>Удалить публикацию</button>
      <button onClick={() => handlerPostVisible(post.id)}>
        Разрещить публикацию
      </button>
    </div>
  );
}

export default PostItem;

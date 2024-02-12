import { deletePost } from "../../redux/Slice/PostsSlice/postsSlice";
import { useAppDispatch } from "../../redux/store";
import { CategoryId } from "../../types/categories/categories";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";

function PostItem({post}:{post:PostType}) {
    const dispatch = useAppDispatch()
    const handleDelete = (id: CategoryId) => {
      dispatch(deletePost(id));
    };

    return (
      <div className="product-card">
        <img src={post.image} alt={post.name} />
        <h3>{post.name}</h3>
        <p>Цена: {post.price}</p>
        <p>Описание: {post.description}</p>
        <p>Размер: {post.size}</p>
        <button onClick={() => handleDelete(post.id)}>
          Удалить публикацию
        </button>
        {/* <button onClick={() => handleEdit(el.id)}>Изменить публикацию</button> */}
        <LikeButton postId={post.id} categoryId={0} />
      </div>
    );
}

export default PostItem;
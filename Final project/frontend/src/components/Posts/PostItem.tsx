import { useSelector } from "react-redux";
import {
  deletePost,
  publichPost,
} from "../../redux/Slice/PostsSlice/postsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { PostId, PostType } from "../../types/posts/posts";
import { harmLoad } from "../../redux/Slice/harmSlice/harmSlice";

function PostItem({ post }: { post: PostType }) {
  const harmArray = useSelector((state: RootState) => state.harm.harm);
  const harmForPost = harmArray.find((h) => h.postId === post.id);

  const dispatch = useAppDispatch();

  const handleDelete = (id: PostId) => {
    // Исправлено на PostId для консистентности типов
    dispatch(deletePost(id));
  };

  const handlerPostVisible = (id: PostId) => {
    dispatch(publichPost(id));
  };

  const handlerHarmVisible = (id: PostId) => {
    dispatch(harmLoad(id));
  };

  // Улучшенная функция colorCase с обработкой undefined и значением по умолчанию
  function colorCase(message: string | undefined): string {
    switch (message) {
      case "Материалы с низким уровнем вреда. Могут считаться экологически устойчивыми и безопасными для окружающей среды.":
        return "green";
      case "Материалы с умеренным уровнем вреда. Требуют внимания и могут потребовать улучшений в производственных процессах для снижения воздействия.":
        return "yellow";
      case "Материалы с высоким уровнем вреда. Могут быть экологически небезопасными и требуют серьезных усилий для снижения их влияния на окружающую среду.":
        return "red";
      default:
        return "transparent"; // Значение по умолчанию, если сообщение не определено или не совпадает ни с одним случаем
    }
  }

  const color = harmForPost ? colorCase(harmForPost.message) : "transparent"; // Использование transparent, если harmForPost не найден

  return (
    <div className="product-card" style={{ border: `2px solid ${color}` }}>
      <img src={post.image} alt={post.name} />
      <h3>{post.name}</h3>
      <p>Цена: {post.price}</p>
      <p>Описание: {post.description}</p>
      <p>Размер: {post.size}</p>
      <h1>{post.publich.toString()}</h1>
      <button onClick={() => handleDelete(post.id)}>Удалить публикацию</button>
      <button onClick={() => handlerPostVisible(post.id)}>
        Разрешить публикацию
      </button>
      <button onClick={() => handlerHarmVisible(post.id)}>
        Проверка вредоносности
      </button>
    </div>
  );
}

export default PostItem;

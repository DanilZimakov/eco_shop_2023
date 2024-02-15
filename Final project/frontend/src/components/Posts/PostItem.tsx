import { useSelector } from "react-redux";
import { deletePost, publichPost } from "../../redux/Slice/PostsSlice/postsSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { CategoryId } from "../../types/categories/categories";
import { PostId, PostType } from "../../types/posts/posts";
import { harmLoad } from "../../redux/Slice/harmSlice/harmSlice";





function PostItem({post}:{post:PostType}) {
    const dispatch = useAppDispatch()
    const handleDelete = (id: CategoryId) => {
      dispatch(deletePost(id));
    };
    const handlerPostVisible = (id:PostId) => {
      dispatch(publichPost(id))
    };
    
    const handlerHarmVisible = (id: PostId) => {
      dispatch(harmLoad(id));
    };
    const {harm} = useSelector((store:RootState) => store.harm)
    console.log(JSON.stringify(harm?.message));
    function colorCase (message:string | undefined) {
      switch (message) {
        case "Материалы с низким уровнем вреда. Могут считаться экологически устойчивыми и безопасными для окружающей среды.":
          return "green";
        case "Материалы с умеренным уровнем вреда. Требуют внимания и могут потребовать улучшений в производственных процессах для снижения воздействия.":
          return "yellow";
        case "Материалы с высоким уровнем вреда. Могут быть экологически небезопасными и требуют серьезных усилий для снижения их влияния на окружающую среду.":
        default:
          break;
      }
    }
    const color = colorCase(harm?.message);
    
    
    
    
    

    return (
      <div className="product-card" style={post.id === harm?.postId ? {border: `2px solid ${color}`} : {border: "none"}} >
        <img src={post.image} alt={post.name} />
        <h3>{post.name}</h3>
        <p>Цена: {post.price}</p>
        <p>Описание: {post.description}</p>
        <p>Размер: {post.size}</p>
        <h1>{post.publich.toString()}</h1>
        <button onClick={() => handleDelete(post.id)}>
          Удалить публикацию
        </button>
        <button onClick={() => handlerPostVisible(post.id)}>Разрещить публикацию</button>
        <button onClick={() => handlerHarmVisible(post.id)}>Проверка вредоностности</button>
      </div>
    );
}

export default PostItem;

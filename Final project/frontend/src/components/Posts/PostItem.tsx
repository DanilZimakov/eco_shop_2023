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
    console.log(JSON.stringify(harm));
    
    
    

    return (
      <div className="product-card" style={{border: `1px solid ${post.publich ? 'green' : 'red'}`}}>
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
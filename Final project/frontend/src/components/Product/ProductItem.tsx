
import './ProductItem.css';
import { RootState, useAppDispatch } from "..//..//redux/store";
import { useSelector } from "react-redux";
import { deletePost } from '../../redux/Slice/PostsSlice/postsSlice';
import { CategoryId } from '../../types/categories/categories';
import LikeButton from '../LikeButton/LikeButton';
import { PostType } from '../../types/posts/posts';

function ProductItem():JSX.Element {
  const {posts} = useSelector((store:RootState) => store.posts)
  const {user} = useSelector((store: RootState) => store.auth)
  const dispatch = useAppDispatch();
  const FilterUserPost = posts.filter((el:PostType) => el.user_id === user?.id)

  const handleDelete = (id:CategoryId) => {
    dispatch(deletePost(id));
  };

  // const handleEdit = (postId: string) => {
  //   dispatch(editProduct(postId));
  // };
  
  return (
    <div>
      {FilterUserPost.map((el:PostType) => (
        <div key={el.id} className="product-card">
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>Цена: {el.price}</p>
          <p>Описание: {el.description}</p>
          <p>Размер: {el.size}</p>
          <button onClick={() => handleDelete(el.id)}>
            Удалить публикацию
          </button>
          {/* <button onClick={() => handleEdit(el.id)}>Изменить публикацию</button> */}
          <LikeButton postId={el.id} categoryId={0} />
        </div>
      ))}
    </div>
  );
}

export default ProductItem;

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";
import { HarmType } from "../../types/harm/harm";

function AllCategoryPost() {
  const { categoryId } = useParams();
  const { posts } = useSelector((s: RootState) => s.posts);
  const fillPost = posts.filter(
    (el: PostType) => el.category_id === Number(categoryId),
  );
  const { harm } = useSelector((s: RootState) => s.harm);
  return (
    <div className="product-card">
      {fillPost.map((post: PostType) => {
        const harmSearch = harm.find(
          (harm: HarmType) => harm.post_id === post.id,
        );
        const color = harmSearch ? harmSearch.color : "none";
        return (
          <div
            key={post.id}
            style={{ border: color ? `1px solid ${color}` : "none" }}
          >
            {post.image && post.image.length > 0 && (
              <img src={post.image} alt={post.name} />
            )}
            <h3>{post.name}</h3>
            <p>Цена: {post.price}.Руб</p>
            {/* <p>Описание: {post.description}</p> */}
            <p>Размер: {post.size}</p>
            <p>Рекомендации: {harmSearch?.message}</p>
            <p>Экологическая оценка: {harmSearch?.ecoStatus}</p>
            <div>
              <LikeButton postId={post.id} categoryId={Number(categoryId)} />
              {/* <div className="add ">
                <img
                  className="a"
                  src={cart}
                  alt="Add"
                  onClick={() => handleAddClick(post)}
                />
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllCategoryPost;

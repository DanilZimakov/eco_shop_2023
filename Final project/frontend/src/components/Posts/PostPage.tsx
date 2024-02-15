import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";

function PostPage() {
  const { categoryId, postId } = useParams();
  const { posts } = useSelector((store: RootState) => store.posts);
  console.log(posts);

  function fillPost(posts: PostType[]) {
    return posts.filter(
      (post) =>
        post.category_id === Number(categoryId) &&
        post.sub_category_id === Number(postId)
    );
  }

  const filteredPosts = fillPost(posts);

  return (
    <div className="card-container">
      {filteredPosts.map((post) => {
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
            <p>{post.price}.Руб</p>
            <p>Описание: {post.description}</p>
            <p>Размер: {post.size}</p>
            <div>
              <LikeButton postId={post.id} categoryId={Number(categoryId)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostPage;

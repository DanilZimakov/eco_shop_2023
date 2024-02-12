import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";

function PostPage() {
  const { categoryId, postId } = useParams();
  const { posts } = useSelector((store: RootState) => store.posts);
  
  function fillPost (posts: PostType[]) {
   const all = posts.filter(
     (post: PostType) =>
       post.category_id === Number(categoryId) &&
       post.sub_category_id === Number(postId)
   );
   return all
  }
  const filteredPosts = fillPost(posts);
  console.log(filteredPosts);
  
  
  
  

  return (
    <div className="card-container">
      {filteredPosts.map((post) => {
        return <div key={post.id}>
            <img src={post.image} alt={post.name} />
            <h3>{post.name}</h3>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.size}</p>
            </div>;
      })}
    </div>
  );
}

export default PostPage;

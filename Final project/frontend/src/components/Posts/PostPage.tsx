import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostType } from "../../types/posts/posts";
import LikeButton from "../LikeButton/LikeButton";

// function PostPage() {
//   const { categoryId, postId } = useParams();
//   const { posts } = useSelector((store: RootState) => store.posts);

//   function fillPost(posts: PostType[]) {
//     const all = posts.filter(
//       (post: PostType) =>
//         post.category_id === Number(categoryId) &&
//         post.sub_category_id === Number(postId),
//     );
//     return all;
//   }
//   const filteredPosts = fillPost(posts);

//   return (
//     <div className="card-container">
//       {filteredPosts.map((post) => {
//         // const imageUrl =
//         //   post.image && post.image.length > 0
//         //     ? post.image[0].url
//         //     : "путь_к_изображению_по_умолчанию.jpg";
//         // console.log("Filtered posts:", filteredPosts);
//         return (
//           <div key={post.id}>
//             <img src={imageUrl} alt={post.name} />
//             <h3>{post.name}</h3>
//             <p>{post.price}</p>
//             <p>{post.description}</p>
//             <p>{post.size}</p>
//             <div>
//               <LikeButton postId={post.id} categoryId={0} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default PostPage;

function PostPage() {
  const { categoryId, postId } = useParams();
  const { posts } = useSelector((store: RootState) => store.posts);

  function fillPost(posts: PostType[]) {
    return posts.filter(
      (post) =>
        post.category_id === Number(categoryId) &&
        post.sub_category_id === Number(postId),
    );
  }

  const filteredPosts = fillPost(posts);

  return (
    <div className="card-container">
      {filteredPosts.map((post) => {
        return (
          <div key={post.id}>
            {/* Проверяем, есть ли изображения и отображаем первое из них */}
            {post.image && post.image.length > 0 && (
              <img src={post.image[0].url} alt={post.name} />
            )}
            <h3>{post.name}</h3>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <p>{post.size}</p>
            <div>
              <LikeButton postId={post.id} categoryId={Number(categoryId)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

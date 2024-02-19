import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import PostItem from "../../Posts/PostItem";
import "./Admin.css";
import { useState } from "react";
import { HarmType } from "../../../types/harm/harm";

type PostPublich = "true" | "false";
const AdminProfile = () => {
  const { posts } = useSelector((store: RootState) => store.posts);
  const [postPublich, setPostPublich] = useState<PostPublich>("false");
  const { harm } = useSelector((store: RootState) => store.harm);

  const post = posts.filter((post) => {
    if (postPublich === "false") {
      return post.publich === false;
    } else {
      return post.publich === true;
    }
  });

  return (
    <div>
      <div className="post-admin navigation">
        <button onClick={() => setPostPublich("false")}>Ожидающие</button>
        <button onClick={() => setPostPublich("true")}>Опубликованные</button>
      </div>
      <div className="post-admin title">
        {postPublich === "false" ? <h2>Ожидающие</h2> : <h2>Опубликованные</h2>}
      </div>
      <div className="post-admin-list">
        {post.map((el) => {
          const harmSearch = harm.find(
            (harm: HarmType) => harm.post_id === el.id
          );
          const color = harmSearch ? harmSearch.color : "none";
          return <PostItem key={el.id} post={el} color={color} />;
        })}
      </div>
    </div>
  );
};

export default AdminProfile;

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import PostItem from "../../Posts/PostItem";

const AdminProfile = () => {
  const { posts } = useSelector((store: RootState) => store.posts);
  return (
    <div>
      {posts.map((el) => {
        return (
          <div>
            <PostItem key={el.id} post={el} />
          </div>
        );
      })}
    </div>
  );
};

export default AdminProfile;

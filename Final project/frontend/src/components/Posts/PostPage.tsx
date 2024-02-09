import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { loadPost } from "../../redux/PostsSlice/postsSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PostPage() {
    const {postId} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(loadPost())
    },[])
    const {posts} = useSelector((store:RootState) => store.posts)
    console.log(posts);
    const postFiller = posts.filter(el => el.id === Number(postId))
    
    return (
        <div className="card-container">
            post
        </div>
    );
}

export default PostPage;
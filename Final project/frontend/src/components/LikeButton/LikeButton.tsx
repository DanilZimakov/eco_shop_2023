import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

interface LikeButtonProps {
  postId: number;
  categoryId: number;
}

const LikeButton = ({ postId, categoryId }: LikeButtonProps): JSX.Element => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const fetchLikes = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/categories/${categoryId}/posts/${postId}/like`,
      );
      setLiked(response.data.liked);
      setLikesCount(response.data.likesCount);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  }, [postId, categoryId]);

  const toggleLike = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error(
          "Authentication token is not found. User might not be logged in.",
        );
        return;
      }

      await axios.post(
        `http://localhost:3000/categories/${categoryId}/posts/${postId}/dislike`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      fetchLikes();
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  return (
    <button onClick={toggleLike} className="like-button">
      <FontAwesomeIcon
        icon={liked ? faHeartSolid : faHeartRegular}
        color={liked ? "red" : "black"}
      />
      <span className="likes-count">{likesCount}</span>
    </button>
  );
};

export default LikeButton;

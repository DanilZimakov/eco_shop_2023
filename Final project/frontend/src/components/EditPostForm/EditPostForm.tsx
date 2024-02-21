import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { editPost } from "../../redux/Slice/PostsSlice/postsSlice";
import { PostEditType, PostType } from "../../types/posts/posts";

interface EditPostFormProps {
  post: PostType | PostEditType;
  closeModal: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, closeModal }) => {
  const [formData, setFormData] = useState({
    name: post.name,
    price: post.price,
    description: post.description,
  });

  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      editPost({
        ...post,
        ...formData,
        weight: "",
      }),
    );
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="price" value={formData.price} onChange={handleChange} />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Сохранить изменения</button>
      <button type="button" onClick={closeModal}>
        Отмена
      </button>
    </form>
  );
};

export default EditPostForm;

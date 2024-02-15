import React from "react";
import EditPostForm from "../EditPostForm/EditPostForm";
import { PostType } from "../../types/posts/posts";


interface ModalProps {
  isOpen: boolean;
  post: PostType;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, post, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onRequestClose}></div>
      <div className="modal-content">
        <EditPostForm post={post} closeModal={onRequestClose} />
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onRequestClose}
      ></button>
    </div>
  );
};

export default Modal;

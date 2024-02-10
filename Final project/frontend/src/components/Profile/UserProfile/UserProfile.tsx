// import React, { useState } from "react";
import "./UserProfile.css";
import AddForm from "../AddForm/AddForm";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

function UserProfile(): JSX.Element {
  // const [rating, setRating] = useState(0);

  // const handleRatingChange = (newRating: number) => {
  //   setRating(newRating);
  // };

  const { posts } = useSelector((store: RootState) => store.posts);
  const { user } = useSelector((store: RootState) => store.auth);
  const FilterUserPost = posts.filter((el) => el.user_id === user?.id);

  return (
    <>
      <div className="user-profile">
        <img
          src={
            "https://cdn.fishki.net/upload/post/2018/04/09/2564770/1-4d137341-2db8-49c6-83de-e8ef75519d43.jpg"
          }
          alt="User avatar"
          className="user-avatar"
        />
        <h2 className="user-name">Name</h2>
        <div className="user-info">
          <h5 className="user-info details">Инфо о пользователе</h5>
          <p>Тут будет информация о пользователе</p>
          {/* <div className="rating-section">
            <h3>Рейтинг</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < rating ? "full" : ""}`}
                  onClick={() => handleRatingChange(i + 1)}
                >
                  ★
                </span>
              ))}
            </div>
          </div> */}
        </div>
        <div>
          <h2>Форма добавления товара</h2>
          <AddForm />
        </div>
        <div>
          <h2>Ваш товар</h2>
          <div>
            {FilterUserPost.map((el) => (
              <div key={el.id} className="product-card">
                <img src={el.image} alt={el.name} />
                <h3>{el.name}</h3>
                <p>Цена: {el.price}</p>
                <p>Описание: {el.description}</p>
                <p>Размер: {el.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

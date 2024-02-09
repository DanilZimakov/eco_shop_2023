import { useState } from "react";
import "./UserProfile.css";
// import AddForm from "../AddForm/AddForm";

function UserProfile(): JSX.Element {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  // const handleFormSubmit = (data: {
  //   productName: string;
  //   productType: string;
  //   gender: string;
  //   compositions: Array<{ material: string; quantity: number }>;
  // }) => {
  //   console.log("Форма отправлена с данными:", data);
  //   // Здесь можно обработать данные формы, например, отправить их на сервер
  // };

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
          <div className="rating-section">
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
          </div>
        </div>
        <div className="add">
          {/* <AddForm onSubmit={handleFormSubmit} /> */}
        </div>
      </div>
    </>
  );
}

export default UserProfile;

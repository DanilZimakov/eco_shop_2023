// import React, { useState } from "react";
import "./UserProfile.css";
import AddForm from "../AddForm/AddForm";
import ProductItem from "../../Product/ProductItem";

function UserProfile(): JSX.Element {
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
        </div>
        <div>
          <h2>Форма добавления товара</h2>
          <AddForm />
        </div>
        <div>
          <h2>Ваши товары</h2>
          <ProductItem />
        </div>
      </div>
    </>
  );
}

export default UserProfile;

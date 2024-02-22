import "./UserProfile.css";
import AddForm from "../AddForm/AddForm";
import ProductItem from "../../Product/ProductItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function UserProfile(): JSX.Element {
  const { user } = useSelector((s: RootState) => s.auth);
  const profile = useSelector((store: RootState) => store.profile.userProfile);
  return (
    <>
      <div className="user-profile-all">
        <div className="user-profile">
          {profile && profile.image ? (
            <>
              <img
                src={profile.image}
                alt="User avatar"
                className="user-avatar"
              />
            </>
          ) : (
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sN1P0X-a0dyw92sbM_zSvaFJD32H9PDJ2g&usqp=CAU"
              }
              alt="User avatar"
              className="user-avatar"
            />
          )}
          <div className="user-container">
            <h2 className="user-name">{user?.name}</h2>
            <div className="user-info">
              {profile ? (
                <>
                  <p>Возраст: {profile.age}</p>
                  <p>Пол: {profile.gender}</p>
                </>
              ) : (
                <>
                  <p className="user-info details">
                    Тут будет информация ваша информация
                  </p>
                </>
              )}
            </div>
            <Link to="/profile/edit">Редактировать профиль</Link>
          </div>
        </div>
        <div className="add-form-in-profile">
          <h2>Форма добавления товара</h2>
          <AddForm />
        </div>
        <div className="posts-in-profile">
          <h2>Ваши товары</h2>
          <ProductItem />
        </div>
      </div>
    </>
  );
}

export default UserProfile;

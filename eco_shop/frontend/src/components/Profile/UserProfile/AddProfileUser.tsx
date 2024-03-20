import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import {
  addUserProfile,
  loadUserProfile,
} from "../../../redux/Slice/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";

type genderType = "" | "Муж" | "Жен";
function AddProfileUser() {
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<genderType>("");
  const [image, setImage] = useState<string>("");
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadUserProfile());
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  function handlerEditProfile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addUserProfile({ age, gender, image }));
    navigate("/profile");
  }

  return (
    <main className="main-auth">
      {user && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label className="label">Имя:</label>
          <p>{user.name}</p>
        </div>
      )}
      <form className="form-auth" onSubmit={handlerEditProfile}>
        <div className="field">
          <label className="label">Возраст:</label>
          <div className="control">
            <input
              className="input-auth"
              type="text"
              placeholder="Введите ваш возраст"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Пол:</label>
          <div className="control">
            <div className="select">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as genderType)}
              >
                <option value="">Ваш пол</option>
                <option value="Муж">Мужчина</option>
                <option value="Жен">Женщина</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Изображение:</label>
          <div className="control">
            <input
              className="input"
              type="file"
              name="image"
              onChange={handleFileChange}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )}
          </div>
        </div>
        <button type="submit">Авторизоваться</button>
      </form>
    </main>
  );
}

export default AddProfileUser;

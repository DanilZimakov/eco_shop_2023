import { useState } from "react";
import "./style.css";
import { RootState, useAppDispatch } from "../../redux/store";
import { signUp } from "../../redux/Slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store: RootState) => store.auth);
  function hadnlerSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signUp({ name, email, password, cpassword, phone })).then(
      (res) => {
        if (res.payload) {
          setName(""),
            setEmail(""),
            setPassword(""),
            setCpassword(""),
            setPhone("");
          navigate("/");
        }
      }
    );
  }

  return (
    <main className="q">
      <form className="form-auth" onSubmit={hadnlerSignUp}>
        {error && (
          <span style={{ color: "red", fontSize: "20px" }}>{error}</span>
        )}
        <input
          className="input-auth"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-auth"
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-auth"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input-auth"
          type="password"
          placeholder="Повторите пароль"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <input
          className="input-auth"
          type="text"
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </main>
  );
}

export default SignUp;

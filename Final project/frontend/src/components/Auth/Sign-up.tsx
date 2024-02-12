import { useState } from "react";
import "./style.css";
import { useAppDispatch } from "../../redux/store";
import { signUp } from "../../redux/Slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function hadnlerSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signUp({ name, email, password, cpassword, phone }));
    setName(""), setEmail(""), setPassword(""), setCpassword(""), setPhone("");
    navigate("/");
  }

  return (
    <main className="main-auth">
      <form className="form-auth" onSubmit={hadnlerSignUp}>
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

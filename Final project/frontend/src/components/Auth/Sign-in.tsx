import { useState } from "react";
import "./style.css";
import { useAppDispatch } from "../../redux/store";

import { signIn } from "../../redux/authSlice/authSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function hadnlerSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signIn({ email, password }));
    setEmail("");
    setPassword("");
    navigate("/");
  }

  return (
    <main className="main-auth">
      <form className="form-auth" onSubmit={hadnlerSignIn}>
        <input
          className="input-auth"
          type="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-auth"
          type="password"
          placeholder="Придумайте пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </main>
  );
}

export default SignIn;

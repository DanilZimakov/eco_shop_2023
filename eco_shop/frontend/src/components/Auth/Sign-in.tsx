import { useState } from "react";
import "./style.css";
import { RootState, useAppDispatch } from "../../redux/store";

import { signIn } from "../../redux/Slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store: RootState) => store.auth);
  function hadnlerSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(signIn({ email, password })).then((res) => {
      if (res.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  }

  return (
    <main className="q">
      <form className="form-auth" onSubmit={hadnlerSignIn}>
        {error && (
          <span style={{ color: "red", fontSize: "20px" }}>{error}</span>
        )}
        <input
          className="input-auth"
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-auth"
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Авторизоваться</button>
      </form>
    </main>
  );
}

export default SignIn;

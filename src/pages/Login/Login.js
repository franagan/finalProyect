import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const INITIAL_STATE = {
    username: "Jacinto91",
    password: "1234",
  };

  const [formUser, setFormUser] = useState(INITIAL_STATE);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
  };

  // fakeUser temporal
  const loginUser = () => {
    const fakeUser = {
      username: "Jacinto91",
      password: "1234",
    };

    if (formUser.username === fakeUser.username && formUser.password === fakeUser.password) {

      // fakeToken temporal
      const fakeToken = "fake_token_here";

      sessionStorage.setItem("token", fakeToken);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setLoginError(true);
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setLoginError(false);
    loginUser();
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <p>Usuario o contraseña incorrectos</p>}
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formUser.username}
          onChange={handleInput}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formUser.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
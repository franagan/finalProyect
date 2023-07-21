import React, { useState } from "react";
import { useAuth } from "../../Context/AuthProvider";

const Login = () => {
  const { login } = useAuth();

  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
    setError("");
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const { username, password } = formUser;

    const isAuthenticated = await login(username, password);

    if (isAuthenticated) {
      setError("");
      setFormUser({ username: "", password: "" });
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={formUser.username} onChange={handleInput} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={formUser.password} onChange={handleInput} />

        {error && <div style={{ color: "red" }}>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
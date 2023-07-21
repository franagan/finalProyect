import React, { useState } from "react";

const Register = () => {
  const [formUser, setFormUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
    setError("");
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const { username, email, password, confirmPassword } = formUser;

    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    if (!usernameRegex.test(username)) {
      setError("El nombre de usuario debe tener entre 5 y 20 caracteres, y solo puede contener letras y números.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    setFormUser({ username: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <section className="text-center text-lg-start">
      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-lg-4 d-none d-lg-flex">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="Trendy Pants and Shoes"
              className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
            />
          </div>
          <div className="col-lg-8">
            <div className="card-body py-5 px-md-5">
              <h2>Registro</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Nombre de usuario"
                    value={formUser.username}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={formUser.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={formUser.password}
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirmar contraseña"
                    value={formUser.confirmPassword}
                    onChange={handleInput}
                  />
                </div>

                {error && <div style={{ color: "red" }}>{error}</div>}

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
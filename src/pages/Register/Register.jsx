import React, { useState } from "react";

const Register = () => {
  const [formUser, setFormUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setFormUser({ ...formUser, [id]: value });
    setError("");
    setSuccessMessage("");
  };

  const handleFocus = () => {
    setSuccessMessage("");
  };

  const hasErrors = !!error;

  const registerUser = async () => {
    try {
      const { name, lastname, email, password, confirmPassword, phone } = formUser;

      const nameRegex = /^[a-zA-Z]{2,30}$/;
      if (!nameRegex.test(name)) {
        setError("El nombre debe tener entre 2 y 30 caracteres y solo puede contener letras.");
        return;
      }

      const lastnameRegex = /^[a-zA-Z]{2,30}$/;
      if (!lastnameRegex.test(lastname)) {
        setError("El apellido debe tener entre 2 y 30 caracteres y solo puede contener letras.");
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

      const response = await fetch("https://backfinalproyect.vercel.app/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, email, password, phone }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        throw new Error(data.message);
      } else {
        setSuccessMessage("¡Tu cuenta ha sido creada con éxito!");
        setFormUser({
          name: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      throw error;
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await registerUser();
    } catch (error) {

    }
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
                    id="name"
                    className="form-control"
                    placeholder="Nombre"
                    value={formUser.name}
                    onChange={handleInput}
                    onFocus={handleFocus}
                  />

                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    placeholder="Apellido"
                    value={formUser.lastname}
                    onChange={handleInput}
                    onFocus={handleFocus}
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
                    onFocus={handleFocus}
                  />

                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="Teléfono"
                    value={formUser.phone}
                    onChange={handleInput}
                    onFocus={handleFocus}
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
                    onFocus={handleFocus}
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
                    onFocus={handleFocus}
                  />
                </div>
                <div>
                {hasErrors && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {!hasErrors && successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
              </div>
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
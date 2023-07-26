import React, { useState } from "react";
import { useAuth } from "../../Context/AuthProvider";

const Login = () => {
  const { login, getUserIdByEmail } = useAuth();

  const [formUser, setFormUser] = useState({
    email: "",
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
    const { email, password } = formUser;

    if (!email || !password) {
      setError("Debes ingresar un email y una contraseña.");
      return;
    }

    const userId = getUserIdByEmail(email);

    if (userId) {
      console.log("El _id del usuario es:", userId);
    } else {
      console.log("No se encontró ningún usuario con ese email.");
    }

    const isAuthenticated = await login(email, password);

    if (isAuthenticated) {
      // El login fue exitoso, puedes redirigir al usuario a la página deseada
      // Por ejemplo, utilizando el hook useNavigate de react-router-dom
      // navigate('/ruta-a-la-pagina-deseada');
    } else {
      setError("Usuario o contraseña incorrectos");
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
              <h2>Iniciar sesión</h2>
              <form onSubmit={onSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    value={formUser.email}
                    onChange={handleInput}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Contraseña"
                    value={formUser.password}
                    onChange={handleInput}
                  />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
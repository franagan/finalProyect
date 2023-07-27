import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <div class="wrapper">
      <h1>Conoce a nuestro Equipo</h1>
      <div class="team">
        <div class="team_member">
          <div class="team_img">
            <img src="./Fran.png" alt="Fran_image"></img>
          </div>
          <h3>Fran</h3>
          <p class="role">Desarrollador</p>
          <p>
            Full Stack Developer con experiencia en JS | REACT | ANGULAR | NODE
            | MySQL | PHP
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/franagan"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/francisco-palero/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="team_member">
          <div class="team_img">
            <img src="./Soraya.png" alt="Soraya_image"></img>
          </div>
          <h3>Soraya</h3>
          <p class="role">Desarrolladora</p>
          <p>
            Full Stack Developer con experiencia en JS | REACT | ANGULAR | NODE
            | MySQL | PHP
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/Suzowy"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/soraya-casanova-9b4a88106/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="team_member">
          <div class="team_img">
            <img src="./Carlos.png" alt="Team_image"></img>
          </div>
          <h3>Carlos</h3>
          <p class="role">Desarrollador</p>
          <p>
            Full Stack Developer con experiencia en JS | REACT | ANGULAR | NODE
            | MySQL | PHP
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/Risorio56"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/carlospastorcebria/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="team_member">
          <div class="team_img">
            <img src="./Cesar.png" alt="Team_image"></img>
          </div>
          <h3>Cesar</h3>
          <p class="role">Desarrollador</p>
          <p>
            Full Stack Developer con experiencia en JS | REACT | ANGULAR | NODE
            | MySQL | PHP
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/Shurjish"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="team_member">
          <div class="team_img">
            <img src="./Iván.png" alt="Iván_image"></img>
          </div>
          <h3>Iván</h3>
          <p class="role">Developer</p>
          <p>
            Full Stack Developer con experiencia en JS | REACT | ANGULAR | NODE
            | MySQL | PHP
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/IvanVillenaG"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-villena-gonz%C3%A1lez-aa5813269/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <div class="form-area">
        <div class="container">
          <div class="row single-form g-0">
            <div class="col-sm-12 col-lg-6">
              <div class="left">
                <h2>
                  <span>Contacta con nosotros para un</span> Nuevo proyecto
                </h2>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="right">
                <i class="fa fa-caret-left"></i>
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Tu email 
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">
                      Mensaje
                    </label>
                    <textarea
                      type="password"
                      class="form-control"
                      id="message"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;

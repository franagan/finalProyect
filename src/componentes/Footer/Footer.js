import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0" className="test">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">Compras Locales.</h5>
                    <p class="small text-muted">Esta pagina ha sido desarrollada por 5 bestias del react</p>
                    <div className='social-logos'> <img className="social-logo-big" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img>
                    <img className="social-logo-big" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-square-color-icon.png'></img>
                    <img className="social-logo-big" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png'></img>
                    <img className="social-logo-big" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-square-color-icon.png'></img>
                    <img className="social-logo-big" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png'></img>
                    </div>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link class="text-primary" to="">Compralocal.com</Link></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3" >Quick links</h5>
                    <ul class="list-unstyled text-muted">
                       <li ><Link className="social-name" to="">Inicio</Link></li> 
                       <li><Link className="social-name" to="login">Login</Link></li> 
                       <li><Link className="social-name" to="Register">Register</Link></li> 
                       <li><Link className="social-name" to="About">About Us</Link></li> 
            
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3" >Desarrolladores </h5>
                    <ul class="list-unstyled text-muted">
                       <li><a className="social-name" href="https://www.linkedin.com">Fran<img className="social-logo" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img></a></li> 
                       <li><a className="social-name" href="https://www.linkedin.com">Cesar<img className="social-logo" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img></a></li>
                       <li><a className="social-name" href="https://www.linkedin.com">Soraya<img className="social-logo" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img></a></li>
                       <li><a className="social-name" href="https://www.linkedin.com">Ivan<img className="social-logo" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img></a></li>
                       <li><a className="social-name" href="https://www.linkedin.com">Carlos<img className="social-logo" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png'></img></a></li> 
            
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">NOTICIAS</h5>
                    <p class="small text-muted">Recibe toda la informacion y novedades de tus tiendas locales favoritas.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="message" type="text" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="plane" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer
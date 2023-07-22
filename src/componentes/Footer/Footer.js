import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0" className="test">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">DEVs.</h5>
                    <p class="small text-muted">Esta pagina ha sido desarrollada por 5 bestias del react</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link class="text-primary" to="">Compralocal.com</Link></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3" >Quick links</h5>
                    <ul class="list-unstyled text-muted">
                       <li><Link  to="">Inicio</Link></li> 
                       <li><Link  to="Comercios">Comercios</Link></li> 
                       <li><Link  to="login">Login</Link></li> 
                       <li><Link  to="About">About Us</Link></li> 
            
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3" >Desarrolladores </h5>
                    <ul class="list-unstyled text-muted">
                       <li><a  href="https://www.linkedin.com">DEV 1</a></li> 
                       <li><a  href="https://www.linkedin.com"> DEV 2</a></li> 
                       <li><a  href="https://www.linkedin.com">DEV 3</a></li> 
                       <li><a  href="https://www.linkedin.com">DEV 4</a></li> 
                       <li><a  href="https://www.linkedin.com">DEV 5</a></li> 
            
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">Recibe toda la informacion y novedades de tus tiendas locales favoritas.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer
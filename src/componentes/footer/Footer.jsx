import React from "react";
import '../footer/footer.css';
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () =>{

    const ScrollToTop = () => {
     window.scrollTo({
       top: (0,0),
       behavior: 'smooth',
     });
 
   return null;
 }
    return(
        <footer id="footer" className="footer">

    <div className="footer-content position-relative">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <img src={logo} alt="" width="50%" style={{marginbbottom: '20px'}}/>
              <p>
                Calle 69 # 14 – 30 Alcazares<br/>
                Bogotá<br/>

              </p>
              <div className="social-links d-flex mt-3">
                <Link to="/construccion"  className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></Link>
                <Link to="/construccion"  className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></Link>
                <Link to="/construccion"  className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></Link>
                <Link to="/construccion"  className="d-flex align-items-center justify-content-center"><i className="bi bi-youtube"></i></Link>
                <Link to="/construccion"  className="d-flex align-items-center justify-content-center"><i className="bi bi-tiktok"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Inicio</h4>
            <ul>
              <li><a href="/construccion">Queremos conocerte</a></li>
              <li><a href="/construccion">Noticias y Eventos</a></li>
              <li><a href="/construccion">Convenios</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Puntos Faltantes</h4>
            <ul>
              <li><Link to="/punto9" onClick={ScrollToTop}>Punto 9</Link></li>
              <li><Link to="/punto10" onClick={ScrollToTop}>Punto 10</Link></li>
              <li><Link to="/punto11" onClick={ScrollToTop}>Punto 11</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Links de Importancia</h4>
            <ul>
              <li><Link to="/construccion">Sistema Académico</Link></li>
              <li><Link to="/construccion">Correo Unihorizonte</Link></li>
              <li><Link to="/construccion">Pagos por Pse</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>  
)
}

export default Footer
import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../img/logo.png";
import { Link } from "react-router-dom";



const Header = () => {

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });

  return null;
}

  const [isMobileNavActive, setIsMobileNavActive] = useState(false); 

  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [isMobileNavActive]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const toggleDropdown = (event) => {
    if (isMobileNavActive) {
      event.preventDefault();
      event.stopPropagation(); // Detener la propagación del evento
  
      const targetElement = event.target;
      const nextElement = targetElement.nextElementSibling;
      const dropDownIndicator = targetElement.querySelector('.dropdown-indicator');
  
      if (targetElement && nextElement && dropDownIndicator) {
        targetElement.classList.toggle('active');
        nextElement.classList.toggle('dropdown-active');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    }
  };

  const handleNavlinkClick = () => {
    if (isMobileNavActive) {
      // Cerrar la navegación móvil cuando se hace clic en un enlace
      closeMobileNav();
    }
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

    return (

      <header id="header" className= "header d-flex align-items-center">
         <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">

      <Link to="/" className="logo d-flex align-items-center" onClick={ScrollToTop}>
        <img src={logo} alt="Logo Unihorizonte"/> 
        
      </Link>

      <i className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-hide' : 'mobile-nav-show'}  bi bi-list`} onClick={toggleMobileNav}></i>
      <i  className={`mobile-nav-toggle ${isMobileNavActive ? 'mobile-nav-show' : 'mobile-nav-hide'} d-none  bi bi-x`} onClick={closeMobileNav}></i>
      <nav id="nav_bar" className="nav_bar"> 
      
        <ul>

          <li className="dropdown" onClick={toggleDropdown} ><Link to="#"onClick={ScrollToTop}><span>Puntos faltantes</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
                  <li onClick={handleNavlinkClick}><Link to="/punto9" onClick={ScrollToTop}>Punto 9</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/punto10" onClick={ScrollToTop}>Punto 10</Link></li>
                  <li onClick={handleNavlinkClick}><Link to="/punto11" onClick={ScrollToTop}>Punto 11</Link></li>              
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#" onClick={ScrollToTop}><span>Admisiones</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li onClick={handleNavlinkClick}><Link to="/construccion" onClick={ScrollToTop}>Proceso de Inscripción</Link></li>
              <li onClick={handleNavlinkClick}><Link to="/construccion" onClick={ScrollToTop}>Financiamento</Link></li>
            </ul>
          </li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#" onClick={ScrollToTop}><span>Proyección Social</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li className="dropdown" onClick={toggleDropdown}><Link to="/construccion" onClick={ScrollToTop}><span>Egresados</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><a href="/construccion"onClick={toggleDropdown}>Egresados</a></li>
                  <li><a href="/construccion"onClick={toggleDropdown}>Noticias para Egresados</a></li>
                </ul>
              </li>
              <li><a href="/construccion">Prácticas</a></li>
            </ul>
          </li>

          <li onClick={handleNavlinkClick}><Link to="/construccion"onClick={ScrollToTop}><span>Investigación</span></Link></li>

          <li className="dropdown" onClick={toggleDropdown}><Link to="#"><span>Horizontista</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li onClick={handleNavlinkClick}><a href="/construccion"onClick={toggleDropdown}>Bienestar Universitario</a></li>
              <li onClick={handleNavlinkClick}><a href="/construccion"onClick={toggleDropdown}>Biblioteca</a></li>
              <li onClick={handleNavlinkClick}><Link to="/construccion" target="_blank">Solicitudes Institucionales</Link></li>
            </ul>
          </li>

          <li onClick={handleNavlinkClick} ><a href="/construccion" target="_blank" >Campus Virtual</a></li>

          <li onClick={handleNavlinkClick} ><Link to="/construccion" target="_blank">Sistema Académico</Link></li>         

        </ul>
      </nav>

    </div>
  </header>
      

      
  
     

        
    )
}

export default Header
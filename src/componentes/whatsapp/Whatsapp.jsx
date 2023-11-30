import React, { useState, useEffect } from "react";
import whatsapp from "../../img/whatsapp.png";
import '../../css/whatsapp.css'

const Whatsapp = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }; 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);  

    return(
        <a href="/construccion" 
        className={`scroll-top ${scrollActive ? 'active' : ''}`}
        target="_blank"><img src={whatsapp} alt="whatsapp" name="whatsapp"/></a>
    )
}

export default Whatsapp
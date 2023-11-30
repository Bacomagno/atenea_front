import React from "react";
import "../carousel/carousel.css"
import Carousel from 'react-bootstrap/Carousel';
import video from "../../../img/hero-carousel/Intro.mp4"
import img1 from '../../../img/hero-carousel/hero-carousel-2.jpg';
import img2 from '../../../img/hero-carousel/hero-carousel-3.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Carouselh = () =>{
    return(
        <Carousel fade>

          <Carousel.Item>
          <video autoPlay muted loop embed-responsive-item="true" controls >
            <source src={video} type="video/mp4" />
          </video>
          </Carousel.Item>

        <Carousel.Item>
         <a href="https://FUH.q10.com/SolicitudesInstitucionales/NuevaSolicitud" target="_blank"> <img src={img1} alt="" text="First slide" className="img-fliud" /></a>
          </Carousel.Item>

        <Carousel.Item>
        <a href="https://FUH.q10.com" target="_blank"><img src={img2} alt="" text="First slide" className="img-fliud" target="_blank" /></a>
        </Carousel.Item>
      </Carousel>
    )
}

export default Carouselh
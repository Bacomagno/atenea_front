import React from "react";
import constrImg from '../../src/img/construccion.svg'


const Construccion = () => {
    return(
        <div className="col-md-12">
            <div className="container">
                <div className="sitio-construccion">
                <img src={constrImg} alt="sitio en construcción"/>
                </div>
        </div>
        </div>

    )
}

export default Construccion
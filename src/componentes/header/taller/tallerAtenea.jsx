import React from "react";
import bannerpre from '../../../img/cursos/banner-prei-02.jpg';
import './tallerAtenea.css';

const tallerAtenea = () =>{
    return(
      <>
        <section id="tallerAtenea" className="tallerAtenea">
          <div id="punto4">
            <h2 className="azul">Soy Azul</h2>
            <h2 className="rojo">Soy Rojo</h2>
          </div>
          <hr></hr>
          <div id="punto5">
            <p>En el momento en que <span class="p1">entiendo verdaderamente</span> a mi <span class="p2">enemigo</span>,
                en el momento en que le <span class="p3">entiendo</span> lo suficientemente bien como para
                <span class="p4">derrotarle</span>, entonces, en ese preciso instante, <span class="p5">también le</span> <span class="p6">quiero</span>
            </p>
          </div>
          <hr></hr>
          <div id="punto6">
            <h2>Enlaces, link y hover</h2>
              <a class="diario1" href="https://www.marca.com/" target="_blank">Ir a Marca</a>
              <br></br>
              <a class="diario2" href="https://colombia.as.com/" target="_blank">Ir a AS</a>
          </div>
          <hr></hr>
          <div id="punto7">
            <nav>
              <ul>
                <li>
                  <i>Inicio</i>
                </li>
                <li>
                  <i>¿Quienes Somos?</i>
                </li>
                <li>
                  <i>Contacto</i>
                </li>
              </ul>
            </nav>
          </div>
          <hr></hr>
          <div id="punto8">
            <table>
              <thead>
                <tr>
                  <th>Edad</th>
                  <th>Peso</th>
                </tr>
                <tbody>
                  <tr>
                    <td>40</td>
                    <td>78</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>76</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      En el momento en que entiendo verdaderamente a mi enemigo,
                      en el momento en que le entiendo lo suficientemente bien como para
                      derrotarle, entonces, en ese preciso instante, también le quiero
                    </td>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>
        </section>
      </>
    )
}

export default tallerAtenea
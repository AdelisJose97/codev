import React from 'react'
import { Link } from "react-router-dom";
import proximamente from '../../Assets/enconstruccion.svg'
import { Button } from 'react-bootstrap'
import "./index.css";

export const Proximamente = () => {
  return (
    <div className="comming">
      <div>
        <img className="img-comming" src={proximamente} alt="" />
      </div>

      <div>
        <p>Plataforma en construccion...</p>
        <Link to="/">
          <Button className="home-card-course-btn">Volver al inicio</Button>
        </Link>

      </div>


    </div>
  )
}

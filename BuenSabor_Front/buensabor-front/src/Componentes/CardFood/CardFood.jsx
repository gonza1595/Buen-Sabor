import React from "react";
import { Link } from "react-router-dom";
import "./CardFood.css";

export default function Home({ imagen, nombre, descripcion, precio, id }) {
  return (
    <div>
      <Link className="text-decoration-none" to={`/home/food/${id}`}>
        <div className="card borderCard" style={{ height: "450px" }}>
          <img
            className="img-fluid imageBorder"
            src={imagen}
            alt="Cargando..."
            style={{ width: "100%", height: "200px" }}
          />
          <div className="card-body text-center">
            <p className="pt-2">
              <strong>{nombre}</strong>
            </p>
            <p className="card-text pt-3">{descripcion}</p>
            <p className="position-absolute bottom-0 start-50 translate-middle-x">
              <strong>$ {precio}</strong>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

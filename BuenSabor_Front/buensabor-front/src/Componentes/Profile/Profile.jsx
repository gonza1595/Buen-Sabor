import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-person-circle heightUserLogoProfile"></i>
      </a>

      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/home/profile/updateData">
            Editar Perfil
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Mis Pedidos
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Mi Carrito
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Cerrar Sesion
          </a>
        </li>
      </ul>
    </div>
  );
}

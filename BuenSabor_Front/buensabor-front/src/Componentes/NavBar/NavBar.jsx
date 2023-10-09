import React from "react";
import logo from "../../Images/Buen sabor logo 1.png";
import LoginAndCart from "../LoginAndCart/LoginAndCart";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border border-dark border-2">
      <div className="container d-flex align-items-center">
        <Link to={"/home"}>
          <img src={logo} alt="Cargando.." />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item d-flex align-items-center"></li>
          <li className="nav-item px-5">
            <LoginAndCart />
          </li>
        </ul>
      </div>
    </nav>
  );
}

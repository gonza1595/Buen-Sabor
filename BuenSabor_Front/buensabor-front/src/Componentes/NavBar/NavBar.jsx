import React from "react";
import logo from "../../Images/Buen sabor logo 1.png";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border border-dark border-2">
      <div className="container d-flex align-items-center">
        <Link to={"/home"}>
          <img src={logo} alt="Cargando.." />
        </Link>

        <ul className="navbar-nav d-flex align-items-center px-5">
          <li className="nav-item">
            <Login />
          </li>
          <li className="nav-item">
            <Cart />
          </li>
          <li className="nav-item px-3">
            <Profile />
          </li>
        </ul>
      </div>
    </nav>
  );
}

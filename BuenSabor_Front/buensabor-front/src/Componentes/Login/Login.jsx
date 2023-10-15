import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <section className="d-flex align-items-center justify-content-center">
      <div className="paddingLoginCart">
        <Link to={"/home/login"}>
          <button className="buttonColor border border-1 px-3">
            <i className="bi bi-person-fill login heightUserLogo"> Login</i>
          </button>
        </Link>
      </div>
    </section>
  );
}

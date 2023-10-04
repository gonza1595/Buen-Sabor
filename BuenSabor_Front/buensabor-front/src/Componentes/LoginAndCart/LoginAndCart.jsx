import React from "react";
import "./LoginAndCart.css";

export default function LoginAndCart() {
  return (
    <section className="d-flex align-items-center justify-content-center">
      <div className="paddingLoginCart">
        <button className="buttonColor border border-1 px-3">
          <i className="bi bi-person-fill login heightUserLogo"> Login</i>
        </button>
      </div>
      <div>
        <i className="bi bi-cart3 heightCart"></i>
      </div>
    </section>
  );
}

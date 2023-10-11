import React, { useState } from "react";
import image from "../../Images/imageForm.jpg";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import "./FormRegister.css";

export default function FormRegister() {
  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordTwo, setshowPasswordTwo] = useState(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };
  const togglePasswordVisibilityTwo = () => {
    setshowPasswordTwo(!showPasswordTwo);
  };

  return (
    <section className="container pt-5">
      <div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-10">
            <div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h1 className="mt-1 pb-1 fw-bold">Crear Cuenta</h1>
                      <p> Ordena cuando quieras desde tu casa</p>
                    </div>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apellido"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telefono"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-outline mb-4 position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="Contraseña"
                        />
                        <div
                          className="position-absolute end-0 top-50 translate-middle-y px-3"
                          style={{ cursor: "pointer" }}
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <i class="bi bi-eye-slash"></i>
                          ) : (
                            <i class="bi bi-eye"></i>
                          )}
                        </div>
                      </div>
                      <div className="form-outline mb-4 position-relative">
                        <input
                          type={showPasswordTwo ? "text" : "password"}
                          className="form-control"
                          placeholder="Repetir Contraseña"
                        />
                        <div
                          className="position-absolute end-0 top-50 translate-middle-y px-3"
                          style={{ cursor: "pointer" }}
                          onClick={togglePasswordVisibilityTwo}
                        >
                          {showPasswordTwo ? (
                            <i class="bi bi-eye-slash"></i>
                          ) : (
                            <i class="bi bi-eye"></i>
                          )}
                        </div>
                      </div>
                      <div className="text-center d-grid gap-2 col-12 mx-auto">
                        <button className="btn buttonLoggin mb-3" type="button">
                          Aceptar
                        </button>
                      </div>
                      <div className="line-with-text pb-3">
                        <span className="line"></span>
                        <span className="text">Inicia Sesión con</span>
                        <span className="line"></span>
                      </div>
                      <div className="d-flex justify-content-center">
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <img
                    clasName="img-fluid"
                    src={image}
                    alt="Cargando.."
                    style={{ width: "100%", height: "700px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

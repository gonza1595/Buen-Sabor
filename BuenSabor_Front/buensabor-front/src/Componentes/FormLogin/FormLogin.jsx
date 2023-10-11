import React from "react";
import image from "../../Images/imageForm.jpg";
import { GoogleLogin } from "@react-oauth/google";
import "./FormLogin.css";

export default function FormLogin() {
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
                      <h1 className="mt-1 pb-1 fw-bold">Inicia Sesión</h1>
                    </div>
                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div className="position-relative pb-5">
                        <a
                          className="position-absolute top-0 end-0 text-dark fw-bolder"
                          href="#!"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                      <div className="text-center d-grid gap-2 col-12 mx-auto">
                        <button className="btn buttonLoggin mb-3" type="button">
                          Aceptar
                        </button>
                      </div>
                      <div className="d-flex align-items-center pb-4">
                        <p className="mb-0 me-2 text-muted">
                          ¿No tienes cuenta?
                        </p>
                        <a className="text-dark fw-bolder" href="#!">
                          Registrate
                        </a>
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

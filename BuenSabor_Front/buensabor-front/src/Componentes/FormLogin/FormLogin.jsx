import React from "react";
import "./FormLogin.css";

export default function FormLogin() {
  return (
    <section class="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
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
                      <div className="text-center">
                        <button
                          className="btn buttonLoggin btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Aceptar
                        </button>
                      </div>

                      <div className="d-flex align-items-center pb-4">
                        <p className="mb-0 me-2">¿No tienes cuenta?</p>
                        <a className="text-dark fw-bolder" href="#!">
                          Registrate
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

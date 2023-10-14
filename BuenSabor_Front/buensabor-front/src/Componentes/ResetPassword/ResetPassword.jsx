import React from "react";
import image from "../../Images/imageForm.jpg";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <section className="container pt-5">
      <div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-10">
            <div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div>
                      <h3 className="pb-5 fw-bold overflow-hidden text-center">
                        ¿Olvidaste tu contraseña?
                      </h3>
                      <p className="text-muted">
                        Ingresa el mail usado en tu cuenta y te enviaremos un
                        codigo para reestablecer tu contraseña
                      </p>
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
                      <div className="text-center d-grid gap-2 col-12 mx-auto">
                        <button className="btn buttonLoggin mb-3" type="button">
                          Aceptar
                        </button>
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
                <div className="d-flex pt-3">
                  <i className="bi bi-arrow-left"></i>
                  <Link className="text-dark fw-bold" to={"/home/login"}>
                    <p className="px-1">Volver</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

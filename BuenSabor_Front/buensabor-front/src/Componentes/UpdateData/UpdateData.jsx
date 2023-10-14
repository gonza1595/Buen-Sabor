import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UpdateData.css";

export default function UpdateData() {
  const [showPassword, setshowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    <section className="container">
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-10 border border-1 rounded">
          <div className="col-12 px-4 pt-3 pb-3">
            <div className="rounded px-3 pt-1 pb-1 backgroundColorData">
              <h1 className="fw-bold">Datos Personales</h1>
            </div>
          </div>
          <div className="px-4">
            <p>Actualiza los datos que sean necesarios</p>
            <hr />
          </div>
          <div className="row">
            <form className="d-flex px-4">
              <div className="col-6 px-2">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rodrigo"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Martinez"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rioja 402"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="RodrigoMartinez@gmail.com"
                  />
                </div>

                <div className="form-outline mb-4 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="*******"
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
              </div>
              <div className="col-6 px-2">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="2619544856"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="select"
                    className="form-select"
                    placeholder="Capital"
                  />
                </div>
                <div className="text-center d-grid gap-2 col-12 mx-auto">
                  <button className="btn buttonLoggin mb-3" type="button">
                    Guardar
                  </button>
                </div>
                <div className="text-center d-grid gap-2 col-12 mx-auto">
                  <button className="btn buttonCancelar mb-3" type="button">
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
            <div className="mx-3">
              <div className="d-flex pb-3">
                <p className="mb-0 me-2 text-muted">
                  ¿Quieres cambiar tu contraseña?
                </p>
                <Link to={"/home/profile/updateData/resetPassword"}>
                  <a className="text-dark fw-bolder">Haga click aqui</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

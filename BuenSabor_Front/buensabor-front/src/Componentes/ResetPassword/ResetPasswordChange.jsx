import React, { useState } from "react";
import image from "../../Images/imageForm.jpg";
import { Link } from "react-router-dom";

export default function ResetPasswordCodeChange() {
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
              <div className="row d-flex justify-content-center align-items-center position-relative">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div>
                      <h3 className="pb-5 fw-bold overflow-hidden text-center">
                        Reestablecer Contraseña
                      </h3>
                      <p className="text-muted">Ingresa tu nueva contraseña</p>
                    </div>
                    <form className="pb-5">
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
                      <div className="d-flex pt-5 position-absolute bottom-0 start-0 px-5">
                        <i className="bi bi-arrow-left"></i>
                        <Link
                          className="text-dark fw-bold"
                          to={"/home/login/resetPass"}
                        >
                          <p className="px-1">Volver</p>
                        </Link>
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

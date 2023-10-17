import React, { useState } from "react";

export default function UpdateDataPass() {
  const [currentShowPassword, setCurrentShowPassword] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordTwo, setshowPasswordTwo] = useState(false);

  const currentTogglePasswordVisibility = () => {
    setCurrentShowPassword(!currentShowPassword);
  };
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };
  const togglePasswordVisibilityTwo = () => {
    setshowPasswordTwo(!showPasswordTwo);
  };

  return (
    <section className="container ">
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-6 border border-1 rounded pt-3">
          <div className="rounded px-3 pt-1 pb-1 backgroundColorData">
            <h1 className="fw-bold">Cambiar Contraseña</h1>
          </div>
          <div>
            <p className="pt-2 px-2">Contraseña Actual</p>
          </div>
          <form>
            <div className="form-outline mb-4 position-relative">
              <input
                type={currentShowPassword ? "text" : "password"}
                className="form-control"
                placeholder="*******"
              />
              <div
                className="position-absolute end-0 top-50 translate-middle-y px-3"
                style={{ cursor: "pointer" }}
                onClick={currentTogglePasswordVisibility}
              >
                {currentShowPassword ? (
                  <i class="bi bi-eye-slash"></i>
                ) : (
                  <i class="bi bi-eye"></i>
                )}
              </div>
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
                Guardar
              </button>
            </div>
            <div className="text-center d-grid gap-2 col-12 mx-auto">
              <button className="btn buttonCancelar mb-3" type="button">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

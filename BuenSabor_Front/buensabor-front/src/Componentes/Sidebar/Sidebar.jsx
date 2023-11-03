import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section>
      <div className="row flex-nowrap">
        <div className="colorBg col-auto min-vh-100 d-flex flex-colum justify-content-center position-relative">
          <div className="colorBg p-2">
            <a className="d-flex text-decoration-none align-items-center justify-content-center">
              <span className="fs-4 d-none d-sm-inline text-dark fw-bold">
                Dashboard
              </span>
            </a>
            <ul className="nav nav-pills flex-column mt-4">
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-black">
                  <i className="bi bi-people fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline px-2">Usuario</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-black">
                  <i className="bi bi-box fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline px-2">Stock</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-black">
                  <i className="bi bi-tag fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline px-2">Rubros</span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-black">
                  <i className="bi bi-bar-chart fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline px-2">
                    Estadisticas
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a href="#" className="nav-link text-black">
                  <i className="bi bi-cash fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline px-2">
                    Facturacion
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown open position-absolute bottom-0 start-50 translate-middle-x pb-5">
            <a
              className="dropdown-toggle text-decoration-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle heightUserLogoProfile"></i>
              <span className="text-dark px-2 d-none d-sm-inline">Admin</span>
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/home/profile/updateData">
                  Editar Perfil
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="sidebar">
<div>
  <div className="row d-flex justify-content-center">
    <div className="col-11">
      <div className="col-12">
        <div className=" border border-1 border-dark rounded bg-dark ">
          <h5 className="text-center text-white text-uppercase pt-2 pb-1">
            Administrador
          </h5>
        </div>
        <div className="px-4 pt-4">
          <li className="list-group-item">
            <a href="#" className="text-decoration-none text-black">
              <i className="bi bi-people fs-5"></i> Usuarios
            </a>
          </li>
          <li className="list-group-item pt-3">
            <a href="#" className="text-decoration-none text-black">
              <i className="bi bi-box fs-5"></i> Stock
            </a>
          </li>
          <li className="list-group-item pt-3">
            <a href="#" className="text-decoration-none text-black">
              <i className="bi bi-tag fs-5"></i> Rubros
            </a>
          </li>
          <li className="list-group-item pt-3">
            <a href="#" className="text-decoration-none text-black">
              <i className="bi bi-bar-chart fs-5"></i> Estadisticas
            </a>
          </li>
          <li className="list-group-item pt-3">
            <a href="#" className="text-decoration-none text-black">
              <i className="bi bi-cash fs-5"></i> Facturacion
            </a>
          </li>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */
}

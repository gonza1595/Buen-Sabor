import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col-11">
            <div className="col-12">
              <div className=" border border-1 border-dark rounded bg-dark">
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
    </section>
  );
}

{
  /* <nav
id="sidebarMenu"
className="collapse d-lg-block sidebar collapse navBgColor"
>
<div className="position-sticky">
  <div className="list-group list-group-flush mx-3 mt-4">
    <ul
      id="collapseExample1"
      className="collapse show list-group list-group-flush"
    >
      <li className="list-group-item navBgColor">
        <a href="#" className="text-decoration-none text-black">
          <i className="bi bi-people"></i> Usuarios
        </a>
      </li>
      <li className="list-group-item py-1 navBgColor">
        <a href="#" className="text-decoration-none text-black">
          <i className="bi bi-box"></i> Stock
        </a>
      </li>
      <li className="list-group-item py-1 navBgColor">
        <a href="#" className="text-decoration-none text-black">
          <i className="bi bi-tag"></i> Rubros
        </a>
      </li>
      <li className="list-group-item py-1 navBgColor">
        <a href="#" className="text-decoration-none text-black">
          <i className="bi bi-bar-chart"></i> Estadisticas
        </a>
      </li>
      <li className="list-group-item py-1 navBgColor">
        <a href="#" className="text-decoration-none text-black">
          <i className="bi bi-cash"></i> Facturacion
        </a>
      </li>
    </ul>
  </div>
</div>
</nav> */
}

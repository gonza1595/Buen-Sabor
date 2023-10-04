import React from "react";
import logo from "../../Images/Buen sabor logo 1.png";
import "./Footer.css";

export default function Footer() {
  return (
    <section>
      <footer className="footerStyle border border-dark border-3">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <div className="px-4">
                <img src={logo} alt="Cargando.." />
                <h4 className="fw-bold px-3 pt-2">¡GRACIAS POR ELEGIRNOS!</h4>
              </div>
            </div>

            <article className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div>
                <h5 className="fw-bold">Contacto</h5>
              </div>
              <div className="d-flex aling-items-center">
                <i className="bi bi-whatsapp"></i>
                <h5 className="px-2">2615968435</h5>
              </div>
              <div>
                <h5>buensabor@gmail.com</h5>
              </div>
            </article>

            <article className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="">Seguinos en nuestras redes</h5>
              <div className="d-flex heightIcons">
                <i class="bi bi-instagram px-3"></i>
                <i class="bi bi-facebook px-3"></i>
                <i class="bi bi-twitter px-3"></i>
              </div>
            </article>
          </div>
        </div>
      </footer>
    </section>
  );
}

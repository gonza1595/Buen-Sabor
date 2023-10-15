import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Orders.css";

export default function Orders() {
  return (
    <section className="container">
      <div>
        <NavBar />
      </div>
      <div>
        <h1 className="fw-bold pt-5 pb-5">Mis Pedidos</h1>
        <table class="table table-bordered">
          <thead>
            <tr className="text-center">
              <th className="backGround" scope="col">
                FECHA Y HORA
              </th>
              <th className="backGround" scope="col">
                NRO PEDIDO
              </th>
              <th className="backGround" scope="col">
                PRECIO
              </th>
              <th className="backGround" scope="col">
                ESTADO
              </th>
              <th className="backGround" scope="col">
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>25/05/2023 18:45 HS</td>
              <td>02256</td>
              <td>$10780</td>
              <td>CONFIRMADO</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="px-2">
                    <button className="buttonStyle">DETALLE</button>
                  </div>
                  <div>
                    <button className="buttonStyle">FACTURA</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>25/05/2023 18:45 HS</td>
              <td>02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="px-2">
                    <button className="buttonStyle">DETALLE</button>
                  </div>
                  <div>
                    <button className="buttonStyle">FACTURA</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>25/05/2023 18:45 HS</td>
              <td> 02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="px-2">
                    <button className="buttonStyle">DETALLE</button>
                  </div>
                  <div>
                    <button className="buttonStyle">FACTURA</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td>25/05/2023 18:45 HS</td>
              <td> 02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="px-2">
                    <button className="buttonStyle">DETALLE</button>
                  </div>
                  <div>
                    <button className="buttonStyle">FACTURA</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="padding">
        <Link to={"/home"}>
          <button className="btn buttonLoggin mb-3 fw-bold" type="button">
            Volver
          </button>
        </Link>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </section>
  );
}

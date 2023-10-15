import React from "react";
import NavBar from "../NavBar/NavBar";

export default function Orders() {
  return (
    <section className="container">
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Mis Pedidos</h1>
        <table class="table table-borderer">
          <thead>
            <tr className="text-center">
              <th scope="col">FECHA Y HORA</th>
              <th scope="col">NRO PEDIDO</th>
              <th scope="col">PRECIO</th>
              <th scope="col">ESTADO</th>
              <th scope="col">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th scope="row">25/05/2023 18:45 HS</th>
              <td>02256</td>
              <td>$10780</td>
              <td>CONFIRMADO</td>
              <td>
                <div className="d-flex align-items-center">
                  <button>DETALLE</button>
                  <button>FACTURA</button>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row">25/05/2023 18:45 HS</th>
              <td>02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center">
                  <button>DETALLE</button>
                  <button>FACTURA</button>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row">25/05/2023 18:45 HS</th>
              <td> 02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center">
                  <button>DETALLE</button>
                  <button>FACTURA</button>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row">25/05/2023 18:45 HS</th>
              <td> 02256</td>
              <td>$10780</td>
              <td>ENTREGADO</td>
              <td>
                <div className="d-flex align-items-center">
                  <button>DETALLE</button>
                  <button>FACTURA</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

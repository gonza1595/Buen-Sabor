import React from "react";
import { useParams } from "react-router-dom";
import food from "../../Data/comidas.json";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./FoodDetail.css";

export default function FoodDetail() {
  const { id } = useParams();
  const idDetail = id;

  const foodDetail = food.comidas.filter((e) => e.id === idDetail);

  return (
    <section className="container">
      <div>
        <article className="pb-5">
          <Navbar />
        </article>
        <article className="d-flex justify-content-center ">
          <div className="containerDetail">
            {foodDetail.map((comida) => (
              <div className="row">
                <div
                  key={comida.id}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                >
                  <img
                    src={comida.imagen}
                    alt="Cargando..."
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div
                  key={comida.id}
                  className="row align-items-center col-xxl-8 col-xl-8 col-lg-8 col-md-8"
                >
                  <h1>{comida.nombre}</h1>
                  <p className="card-text fontSizeDescription">
                    {comida.descripcion}
                  </p>
                  <h5>$ {comida.precio}</h5>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article>
          <Footer />
        </article>
      </div>
    </section>
  );
}

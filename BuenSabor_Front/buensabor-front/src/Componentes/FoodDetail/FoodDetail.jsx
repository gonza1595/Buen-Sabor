import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesId } from "../../Redux/Actions";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./FoodDetail.css";

export default function FoodDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const artId = useSelector((state) => state.articleDetail);

  useEffect(() => {
    dispatch(getArticlesId(id));
  }, [id, dispatch]);

  return (
    <section className="container">
      <div>
        <article className="pb-5">
          <Navbar />
        </article>
        <article className="d-flex justify-content-center ">
          <div className="containerDetail">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                {/* <img
                  src={artId.data.url_Imagen}
                  alt="Cargando..."
                  style={{ width: "100%", height: "auto" }}
                /> */}
              </div>
              <div
                key={artId.data?.id}
                className="row align-items-center col-xxl-8 col-xl-8 col-lg-8 col-md-8"
              >
                <h1>{artId.data?.denominacion}</h1>
                <p className="card-text fontSizeDescription">
                  {artId.data?.descripcion}
                </p>
                <h5>$ {artId.data?.precioVenta}</h5>
              </div>
            </div>
          </div>
        </article>
        <article>
          <Footer />
        </article>
      </div>
    </section>
  );
}

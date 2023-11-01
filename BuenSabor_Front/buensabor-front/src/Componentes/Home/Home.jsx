import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../Redux/Actions";
import CardFood from "../CardFood/CardFood";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

export default function Home() {
  const articleState = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  console.log(articleState.data);

  // pagination
  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;

  //searchBar filter
  const filteredFood = nameSearch
    ? articleState.data?.filter((comida) =>
        comida.nombre.toLowerCase().includes(nameSearch.toLowerCase())
      )
    : articleState.data;

  const foodToShow = filteredFood?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber);
  }

  return (
    <section className="container">
      <article>
        <Navbar />
      </article>

      <article className="backGroundImage position-relative">
        <div className="position-absolute top-50 start-0 translate-middle-y px-5">
          <div>
            <div className="d-flex">
              <h1 className="text-white fontSize">La mejor</h1>
              <h1 className="colorText">COMIDA</h1>
            </div>
            <h1 className="text-white fontSize pb-3">¡Hace tu pedido!</h1>
          </div>
          <div className="pt-4">
            <button className="buttonStyle px-4 pt-1 pb-1">Pedi ahora</button>
          </div>
        </div>
      </article>
      <article>
        <div>
          <hr className="hr" />
          <div className="d-flex justify-content-center">
            <Link className="text-decoration-none" to={"/home/Hamburguesas"}>
              <h5 className="px-4 text-dark">Hamburguesas</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home/Lomos"}>
              <h5 className="px-4 text-dark">Lomos</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home/Papas Fritas"}>
              <h5 className="px-4 text-dark">Papas Fritas</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home/Empanadas"}>
              <h5 className="px-4 text-dark">Empanadas</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home/Pizzas"}>
              <h5 className="px-4 text-dark">Pizzas</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home/Bebidas"}>
              <h5 className="px-4 text-dark">Bebidas</h5>
            </Link>
            <Link className="text-decoration-none" to={"/home"}>
              <h5 className="px-4 text-dark">Todos los productos</h5>
            </Link>
          </div>
          <hr className="hr" />
          <article className="pt-3 pb-2 d-flex justify-content-center">
            <SearchBar
              nameSearch={nameSearch}
              setNameSearch={setNameSearch}
              setSearchTerm={setSearchTerm}
              setPage={setPage}
            />
          </article>
        </div>
      </article>
      <article>
        <div className="row">
          {foodToShow && foodToShow.length > 0 ? (
            foodToShow.map((comida, index) => (
              <div
                key={comida.id}
                className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 p-4"
              >
                <CardFood
                  id={comida.id}
                  imagen={comida.url_Imagen}
                  nombre={comida.denominacion}
                  descripcion={comida.descripcion}
                  precio={comida.precioVenta}
                />
              </div>
            ))
          ) : (
            <div className="pt-5 pb-5">
              <div className="container incorrectName-container">
                <i className="bi bi-exclamation-square-fill fs-1"></i>
                {nameSearch ? (
                  <>
                    <h2 className="incorrectName-title">Lo sentimos</h2>
                    <p className="incorrectName-description">
                      El producto que buscas no se encuentra en nuestro
                      restaurante.
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </article>
      {foodToShow && foodToShow.length > 0 ? (
        filteredFood ? (
          <article className="pt-4 pb-5">
            <Pagination
              showPerPage={showPerPage}
              food={filteredFood.length}
              pagination={pagination}
              page={page}
            />
          </article>
        ) : null
      ) : null}
      <article>
        <Footer />
      </article>
    </section>
  );
}

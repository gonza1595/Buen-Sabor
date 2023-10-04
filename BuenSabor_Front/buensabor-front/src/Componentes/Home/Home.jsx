import React, { useState } from "react";
import food from "../../Data/comidas.json";
import CardFood from "../CardFood/CardFood";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [page, setPage] = useState(1);

  // pagination
  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;

  //searchBar filter
  const filteredFood = nameSearch
    ? food.comidas?.filter((comida) =>
        comida.nombre.toLowerCase().includes(nameSearch.toLowerCase())
      )
    : food.comidas;

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
            <h4 className="px-5">Hamburguesas</h4>
            <h4 className="px-5">Lomos</h4>
            <h4 className="px-5">Papas Fritas</h4>
            <h4 className="px-5">Empanadas</h4>
            <h4 className="px-5">Pizzas</h4>
            <h4 className="px-5">Bebidas</h4>
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
                  imagen={comida.imagen}
                  nombre={comida.nombre}
                  descripcion={comida.descripcion}
                  precio={comida.precio}
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
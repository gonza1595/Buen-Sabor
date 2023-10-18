import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import food from "../../Data/comidas.json";

export default function CartSection() {
  const foodInTheCart = JSON.parse(localStorage.getItem("foodInTheCart")) || [];

  const foodCart = food.comidas.filter((comida) =>
    foodInTheCart.includes(comida.id)
  );

  const uniqueFood = [];

  if (foodCart && foodCart.length) {
    for (let i = 0; i < foodCart.length; i++) {
      const food = foodCart[i];
      if (!uniqueFood.find((item) => item.id === food.id)) {
        uniqueFood.push(food);
      }
    }
  }

  return (
    <section className="container">
      <div>
        <NavBar />
      </div>
      <div className="text-center pt-5 pb-5">
        <h1 className="fw-bold">Mi carrito</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-10 ">
          {uniqueFood.map((food) => (
            <div className="row">
              <div className="d-flex align-items-center pb-5">
                <div className="col-8">
                  <div className="d-flex align-items-center">
                    <img
                      src={food.imagen}
                      alt="Cargando..."
                      style={{ width: "30%", height: "auto" }}
                    />
                    <div className="px-4">
                      <h5>{food.nombre}</h5>
                      <p>{food.descripcion}</p>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="d-flex align-items-center justify-content-center">
                    <i class="bi bi-dash-circle heightCart"></i>
                    <h4 className="text-center px-2">1</h4>
                    <i class="bi bi-plus-circle heightCart"></i>
                  </div>
                </div>
                <div className="col-2">
                  <h5 className="text-center">$ {food.precio}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

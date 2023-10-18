import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import food from "../../Data/comidas.json";

import "./CardFood.css";

export default function Home({ imagen, nombre, descripcion, precio, id }) {
  const [cartFood, setCartFood] = useState({});

  useEffect(() => {
    // leemos la lista de comidas agregadas al localStorage
    const foodInTheCart =
      JSON.parse(localStorage.getItem("foodInTheCart")) || [];
    // creamos un objeto "foodInTheCartState" que contiene los ID de las comidas
    // como clave y se establece el valor de cada clave en "true"
    const foodInTheCartState = {};
    foodInTheCart.forEach((id) => {
      foodInTheCartState[id] = true;
    });
    // se actualiza el estado "cartFood" con el objeto "foodInTheCartState"
    setCartFood(foodInTheCartState);
  }, []);

  function handleCartFood(id, e) {
    e.preventDefault();
    // leemos la lista de comidas en el localStorage
    const foodInTheCart =
      JSON.parse(localStorage.getItem("foodInTheCart")) || [];
    // verificamos si la imagen esta en el carrito
    if (cartFood[id]) {
      const index = foodInTheCart.findIndex((foodId) => foodId === id);
      //si esta en el carrito elimina el ID de la comida de la lista "favoritesIamges"
      foodInTheCart.splice(index, 1);
    } else {
      // si no esta en el carrito agrega el ID de la comida a "foodInTheCart"
      foodInTheCart.push(id);
    }
    // actualizamos el localStorage con la lista actualizada de las comidas
    localStorage.setItem("foodInTheCart", JSON.stringify(foodInTheCart));
    // actualizamos el estado de cartFood actual,
    // si la comida estaba en el carrito se elimina, si no estaba se agrega
    setCartFood({ ...cartFood, [id]: !cartFood[id] });
  }

  return (
    <div>
      <Link className="text-decoration-none" to={`/home/food/${id}`}>
        <div
          className="card borderCard imageBorder"
          style={{ height: "450px" }}
        >
          <div
            className="circle position-absolute top-0 end-0"
            onClick={(e) => handleCartFood(id, e)}
          >
            {cartFood[id] ? (
              <i className="bi bi-cart-fill heightCart"></i>
            ) : (
              <i className="bi bi-cart heightCart"></i>
            )}
          </div>
          <img
            className="img-fluid imageBorderCard"
            src={imagen}
            alt="Cargando..."
            style={{ width: "100%", height: "200px" }}
          />
          <div className="card-body text-center">
            <p className="pt-2">
              <strong>{nombre}</strong>
            </p>
            <p className="card-text pt-3">{descripcion}</p>
            <p className="position-absolute bottom-0 start-50 translate-middle-x">
              <strong>$ {precio}</strong>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

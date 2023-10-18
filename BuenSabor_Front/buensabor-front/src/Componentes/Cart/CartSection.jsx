import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import food from "../../Data/comidas.json";
import "./CartSection.css";

export default function CartSection() {
  const foodInTheCart = JSON.parse(localStorage.getItem("foodInTheCart")) || [];

  const [deleteProductCart, setDeleteProductCart] = useState(foodInTheCart);

  const foodCart = food.comidas.filter((comida) =>
    deleteProductCart.includes(comida.id)
  );

  const [productCounts, setProductCounts] = useState({}); // Cambiar el estado inicial a un objeto
  const [addPrice, setAddPrice] = useState({}); // Cambiar el estado inicial a un objeto

  function handleAddIcon(foodId) {
    // Clonar el objeto de recuento actual
    const newCounts = { ...productCounts };
    // Obtener el recuento actual del producto
    const currentCount = newCounts[foodId] || 1;
    // Incrementar el recuento del producto seleccionado
    newCounts[foodId] = currentCount + 1;
    // Actualizar el estado con el nuevo objeto de recuento
    setProductCounts(newCounts);
    // Clonar el objeto de precios adicionales actual
    const newPrices = { ...addPrice };
    // Obtener el precio del producto
    const productPrice =
      foodCart.find((food) => food.id === foodId)?.precio || 0;
    // Calcular el precio total para el producto
    const totalPrice = productPrice * (currentCount + 1);
    // Actualizar el estado con el nuevo precio
    newPrices[foodId] = totalPrice;
    setAddPrice(newPrices);
  }

  function handleSubtractIcon(foodId) {
    // Clonar el objeto de recuento actual
    const newCounts = { ...productCounts };
    // Obtener el recuento actual del producto
    const currentCount = newCounts[foodId] || 1;
    // Incrementar el recuento del producto seleccionado
    newCounts[foodId] = currentCount - 1;
    // Actualizar el estado con el nuevo objeto de recuento
    setProductCounts(newCounts);
    // Clonar el objeto de precios adicionales actual
    const newPrices = { ...addPrice };
    // Obtener el precio del producto
    const productPrice =
      foodCart.find((food) => food.id === foodId)?.precio || 0;
    // Calcular el precio total para el producto
    const totalPrice = productPrice * (currentCount - 1);
    // Actualizar el estado con el nuevo precio
    newPrices[foodId] = totalPrice;
    setAddPrice(newPrices);
  }

  function handleDeleteProduct(foodId) {
    // Clonar el estado de productos eliminados actual
    const updatedDeleteProductCart = [...deleteProductCart];
    // Encontrar y eliminar el producto del array
    const index = updatedDeleteProductCart.indexOf(foodId);
    if (index > -1) {
      updatedDeleteProductCart.splice(index, 1);
    }
    // Actualizar el estado con el nuevo array
    setDeleteProductCart(updatedDeleteProductCart);

    // Actualizar el localStorage sin el producto eliminado
    const updatedLocalStorage =
      JSON.parse(localStorage.getItem("foodInTheCart")) || [];
    const productIndex = updatedLocalStorage.indexOf(foodId);
    if (productIndex > -1) {
      updatedLocalStorage.splice(productIndex, 1);
      localStorage.setItem(
        "foodInTheCart",
        JSON.stringify(updatedLocalStorage)
      );
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
        <div className="col-10">
          {foodCart.map((food) => (
            <div className="row" key={food.id}>
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
                    {productCounts[food.id] <= 1 || !productCounts[food.id] ? (
                      <i
                        className="bi bi-x-circle heightCart"
                        onClick={() => handleDeleteProduct(food.id)}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-dash-circle heightCart"
                        onClick={() => handleSubtractIcon(food.id)}
                      ></i>
                    )}
                    <h4 className="text-center px-2">
                      {productCounts[food.id] || 1}
                    </h4>
                    <i
                      className="bi bi-plus-circle heightCart"
                      onClick={() => handleAddIcon(food.id)}
                    ></i>
                  </div>
                </div>
                <div className="col-2">
                  <h5 className="text-center">
                    $ {addPrice[food.id] || food.precio}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="line"></div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

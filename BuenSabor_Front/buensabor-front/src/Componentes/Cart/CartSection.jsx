import React from "react";
import food from "../../Data/comidas.json";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function CartSection() {
  return (
    <section className="container">
      <div>
        <NavBar />
      </div>
      <div className="text-center pt-5">
        <h1 className="fw-bold">Mi carrito</h1>
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

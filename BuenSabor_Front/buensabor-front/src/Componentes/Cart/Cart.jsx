import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <Link to={"/home/cart"} className="text-dark">
      <div>
        <i className="bi bi-cart3 heightCart"></i>
      </div>
    </Link>
  );
}

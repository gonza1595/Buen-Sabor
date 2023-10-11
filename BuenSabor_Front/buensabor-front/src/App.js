import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import FoodDetail from "./Componentes/FoodDetail/FoodDetail";
import HomeCategory from "./Componentes/HomeCategory/HomeCategory";
import FormLogin from "./Componentes/FormLogin/FormLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/food/:id" element={<FoodDetail />} />
        <Route path="/home/:category" element={<HomeCategory />} />
        <Route path="/home/login" element={<FormLogin />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import FoodDetail from "./Componentes/FoodDetail/FoodDetail";
import HomeCategory from "./Componentes/HomeCategory/HomeCategory";
import FormLogin from "./Componentes/FormLogin/FormLogin";
import FormRegister from "./Componentes/FormRegister/FormRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/food/:id" element={<FoodDetail />} />
        <Route path="/home/:category" element={<HomeCategory />} />
        <Route path="/home/login" element={<FormLogin />} />
        <Route path="/home/register" element={<FormRegister />} />
      </Routes>
    </div>
  );
}

export default App;

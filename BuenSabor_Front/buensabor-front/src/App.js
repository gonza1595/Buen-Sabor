import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import FoodDetail from "./Componentes/FoodDetail/FoodDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/food/:id" element={<FoodDetail />} />
      </Routes>
    </div>
  );
}

export default App;

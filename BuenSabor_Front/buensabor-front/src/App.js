import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import FoodDetail from "./Componentes/FoodDetail/FoodDetail";
import HomeCategory from "./Componentes/HomeCategory/HomeCategory";
import FormLogin from "./Componentes/FormLogin/FormLogin";
import FormRegister from "./Componentes/FormRegister/FormRegister";
import ResetPassword from "./Componentes/ResetPassword/ResetPassword";
import ResetPasswordCode from "./Componentes/ResetPassword/ResetPasswordCode";
import ResetPasswordCodeChange from "./Componentes/ResetPassword/ResetPasswordChange";
import UpdateData from "./Componentes/UpdateData/UpdateData";
import UpdateDataPass from "./Componentes/UpdateData/UpdataDataPass";
import Orders from "./Componentes/Orders/Orders";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/food/:id" element={<FoodDetail />} />
        <Route path="/home/:category" element={<HomeCategory />} />
        <Route path="/home/login" element={<FormLogin />} />
        <Route path="/home/register" element={<FormRegister />} />
        <Route path="/home/login/resetPass" element={<ResetPassword />} />
        <Route
          path="/home/login/resetPass/code"
          element={<ResetPasswordCode />}
        />
        <Route
          path="/home/login/resetPass/change"
          element={<ResetPasswordCodeChange />}
        />
        <Route path="/home/profile/updateData" element={<UpdateData />} />
        <Route
          path="/home/profile/updateData/resetPassword"
          element={<UpdateDataPass />}
        />
        <Route path="/home/profile/myOrders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;

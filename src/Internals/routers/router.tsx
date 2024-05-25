import { Route, Routes } from "react-router-dom";
import DashBoard from "../views/DashBoard";
import Account from "../views/Account";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Router;

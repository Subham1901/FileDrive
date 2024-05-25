import { RouterType } from "./router.types";
import DashBoard from "../views/DashBoard";
import LandingPage from "../views/LandingPage";
const pagesData: RouterType[] = [
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/", element: <LandingPage /> },
];
export default pagesData;

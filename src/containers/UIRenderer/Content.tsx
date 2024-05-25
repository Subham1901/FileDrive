import { FunctionComponent } from "react";
import { SideBarProps } from "../../components/SideBar/sidebar.types";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
// import DashBoard from "../../Internals/views/DashBoard";
import Router from "../../Internals/routers/router";

const Content: FunctionComponent<SideBarProps> = ({
  sidebarOpen,
  toggleSidebar,
}) => {
  return (
    <main
      className={`main flex flex-col flex-1 transition-all duration-150 ease-in ${
        sidebarOpen ? "ml-64" : "-ml-64 md:ml-0"
      }`}
    >
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700 ">Dashboard</h1>
        <div className="h-[560px] bg-white rounded-md overflow-y-auto">
          <Router />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Content;

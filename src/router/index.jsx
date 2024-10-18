import { useRoutes, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Login from "../page/Login";
import Dashboard from "../page/Dashboard"
import Producto from "../page/Producto";
import NavBar from "../components/NavBar";
import Statistics from "../page/Statistics";
import AllProductos from "../page/AllProductos";

const Layout = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full">
        <NavBar />
      </div>

      <div className="container flex">
        <div className="">
          <Menu />
        </div>

        <div className="w-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function Router() {
  const routes = [
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/home",
      element: <Layout/>,
      children: [
        {
          path: "/home/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/home/statistics",
          element: <Statistics/>,
        },
        {
            path: "/home/product",
            element: <Producto/>,
        },
        {
          path: "/home/allproduct",
          element: <AllProductos/>
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;

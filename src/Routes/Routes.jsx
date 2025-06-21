import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      }
    ]
  },
]);
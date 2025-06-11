import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
  },
]);
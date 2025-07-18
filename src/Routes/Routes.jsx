import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contact/Contacts";
import SignUp from "../Pages/Autentication/SignUp";
import SignIn from "../Pages/Autentication/SignIn";
import Cart from "../Pages/Carts/Carts";
import ProductDetails from "../Components/ProductDetails";
import CheckoutPage from "../Components/CeckOutPage";
import CategoryProducts from "../Components/CategoryProducts";
import ErrorElement from '../Components/ErrorElement'
import Dashboard from "../MainLayout/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/details/:id',
        element: <ProductDetails />,
        loader: () => fetch(`/Product.json`)
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contacts />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/signIn',
        element: <SignIn />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout/:id',
        element: <CheckoutPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/category/:category',
        element: <CategoryProducts />,
        loader: () => fetch(`/Product.json`)
      }
    ]
  },
  {
    path: '/dashboard',
    errorElement: <ErrorElement />,
    element: <Dashboard />,
  }
]);
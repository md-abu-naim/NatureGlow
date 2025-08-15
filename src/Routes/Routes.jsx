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
import Profile from "../Pages/Dashboard/Profile";
import Users from "../Pages/Dashboard/AdminBar/Users";
import AddProduct from "../Pages/Dashboard/AdminBar/AddProduct";
import AddressBook from "../Pages/Dashboard/UserBar/AddressBook";
import Products from "../Pages/Dashboard/AdminBar/Products";
import UpdateProduct from "../Pages/Dashboard/AdminBar/UpdateProduct";
import OrderDetails from "../Pages/Dashboard/OrderDetails";
import Orders from "../Pages/Dashboard/Orders";
import AdminDashboard from "../Pages/Dashboard/AdminBar/AdminDashboard/AdminDashboard";
import UserDashboard from "../Pages/Dashboard/UserBar/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";
import Reviews from "../Pages/Dashboard/AdminBar/Reviews";

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
        element: <Shop />,
      },
      {
        path: '/details/:_id',
        element: <ProductDetails />
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
        path: '/checkout/:_id',
        element: <CheckoutPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/category/:category',
        element: <CategoryProducts />,
      }
    ]
  },
  {
    path: '/dashboard',
    errorElement: <ErrorElement />,
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      // Admin Routes
      {
        path: 'admin-dashboard',
        element: <PrivateRoutes><AdminDashboard /></PrivateRoutes>
      },
      {
        path: 'products',
        element: <PrivateRoutes><Products /></PrivateRoutes>
      },
      {
        path: `update/:id`,
        element: <PrivateRoutes><UpdateProduct /></PrivateRoutes>
      },
      {
        path: 'addProduct',
        element: <PrivateRoutes><AddProduct /></PrivateRoutes>
      },
      {
        path: 'users',
        element: <PrivateRoutes><Users /></PrivateRoutes>,
      },
      {
        path: 'reviews',
        element: <PrivateRoutes><Reviews /></PrivateRoutes>,
      },
      // User Routes
      {
        path: 'user-dashboard',
        element: <PrivateRoutes><UserDashboard /></PrivateRoutes>
      },
      {
        path: 'addressBook',
        element: <PrivateRoutes><AddressBook /></PrivateRoutes>
      },

      // Shared Routes
      {
        path: 'orders',
        element: <PrivateRoutes><Orders /></PrivateRoutes>
      },
      {
        path: 'order-details/:id',
        element: <PrivateRoutes><OrderDetails /></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      },
    ]
  }
]);
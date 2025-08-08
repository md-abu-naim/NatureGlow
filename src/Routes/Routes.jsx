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
import axios from "axios";

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
        element: <ProductDetails />,
        // loader: () => axios(`http://localhost:3000/all-products`)
        loader: () => axios(`https://natureglow.vercel.app/all-products`)
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
    element: <Dashboard />,
    children: [
      // Admin Routes
      {
        path: 'admin-dashboard',
        element: <AdminDashboard />,
        loader: () => axios(`http://localhost:3000/orders`)
        // loader: () => axios(`https://natureglow.vercel.app/orders`)
      },
      {
        path: 'users',
        element: <Users />,
        loader: () => fetch(`/Users.json`)
      },
      {
        path: 'products',
        element: <Products />,
        // loader: () => axios(`http://localhost:3000/all-products`)
        loader: () => axios(`https://natureglow.vercel.app/all-products`)
      },
      {
        path: `update/:id`,
        element: <UpdateProduct />,
        // loader: ({ params }) => axios(`http://localhost:3000/product/${params.id}`)
        loader: ({ params }) => axios(`https://natureglow.vercel.app/product/${params.id}`)
      },
      {
        path: 'addProduct',
        element: <AddProduct />
      },
      // User Routes
      {
        path: 'user-dashboard',
        element: <UserDashboard />,
        loader: () => axios(`/Orders.json`)
      },
      {
        path: 'addressBook',
        element: <AddressBook />
      },

      // Shared Routes
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'order-details/:id',
        element: <OrderDetails />,
        // loader: ({params}) => axios(`http://localhost:3000/order/${params.id}`)
        loader: ({params}) => axios(`https://natureglow.vercel.app/order/${params.id}`)
      },
      {
        path: 'profile',
        element: <Profile />
      },
    ]
  }
]);
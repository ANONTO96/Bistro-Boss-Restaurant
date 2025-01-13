import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Register";
import FullMenu from "../pages/FullMenu";
import Order from "../pages/Order";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/dashboard/Cart";
import Dashboard from "../layouts/Dashboard";
import ContactInfo from "../pages/ContactInfo";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/full-menu',
            element:<FullMenu></FullMenu>
        },
        {
            path:'/order/:category',
            element:<Order></Order>
        },
        {
            path:'/contact',
            element:<ContactInfo></ContactInfo>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/cart/:email',
          element:<PrivateRoute><Cart></Cart></PrivateRoute>
        },
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Registration></Registration>
    }
  ]);
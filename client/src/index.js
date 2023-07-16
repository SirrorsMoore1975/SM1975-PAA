import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import AU from "./pages/AU";
import Docomo from "./pages/Docomo";
import GTN from "./pages/GTN";
import Linemo from "./pages/Linemo";
import Mobal from "./pages/Mobal";
import Rakuten from "./pages/Rakuten";
import Softbank from "./pages/Softbank";
import UQ from "./pages/UQ";
import Ymobile from "./pages/Ymobile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/Form",
    element: <Form />
  },
  {
    path: "/AU",
    element: <AU />
  },
  {
    path: "/Docomo",
    element: <Docomo />
  },
  {
    path: "/GTN Mobile",
    element: <GTN />
  },
  {
    path: "/Linemo",
    element: <Linemo />
  },
  {
    path: "/Mobal",
    element: <Mobal />
  },
  {
    path: "/Rakuten Mobile",
    element: <Rakuten />
  },
  {
    path: "/Softbank",
    element: <Softbank/>
  },
  {
    path: "/UQ Mobile",
    element: <UQ />
  },
  {
    path: "/Y!mobile",
    element: <Ymobile />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={ router } />
);
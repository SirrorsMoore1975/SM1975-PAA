import './index.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

import ThankYou from "./pages/ThankYou";
import ReviewForm from "./pages/ReviewForm";
import Provider from "./pages/Provider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/AU",
    // element: <AU />
    element: <Provider provider_id={3}/>
  },
  {
    path: "/Docomo",
    // element: <Docomo />
    element: <Provider provider_id={2} />
  },
  {
    path: "/GTN Mobile",
    // element: <GTN />
    element: <Provider provider_id={9}/>
  },
  {
    path: "/Linemo",
    // element: <Linemo />
    element: <Provider provider_id={6} />
  },
  {
    path: "/Mobal",
    // element: <Mobal />
    element: <Provider provider_id={1}/>
  },
  {
    path: "/Rakuten Mobile",
    // element: <Rakuten />
    element: <Provider provider_id={5} />
  },
  {
    path: "/Softbank",
    // element: <Softbank/>
    element: <Provider provider_id={4} />
  },
  {
    path: "/UQ Mobile",
    // element: <UQ />
    element: <Provider provider_id={8} />
  },
  {
    path: "/Y!mobile",
    // element: <Ymobile />
    element: <Provider provider_id={7} />
  },
  {
    path: "/thankyou",
    element: <ThankYou text={"undefined"} />
  },
  {
    path: "/reviewform",
    element:<ReviewForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={ router } />
);
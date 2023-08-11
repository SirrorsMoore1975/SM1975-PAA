import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

import ThankYou from "./pages/ThankYou";
import ReviewForm from "./pages/ReviewForm";
import Provider from "./pages/Provider";
import ErrorPage from "./pages/ErrorPage";


import provider from "./data/provider.json"

const App = () => {
    const route = [
        {
            path:'/',
            element:<Homepage />
        },
        {
            path:'/reviewform',
            element:<ReviewForm />
        },
        {
            path:'/thankyou',
            element: <ThankYou text="undefined" />
        },
        {
            path:'/errorpage',
            element: <ErrorPage />
        },
        {
            path:'/provider/1',
            element:<Provider />
        }
    ]
    const routes = createBrowserRouter(route)
    return (
        <>
        <div className="App">
            <RouterProvider router={routes} />
        </div>
        </>
    )
}
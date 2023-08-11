import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const route = [
        {
            path:'/',
            element:<Homepage />
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
            path:'/provider/:provider_id',
            element:<Provider provider_id={provider_id} />
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
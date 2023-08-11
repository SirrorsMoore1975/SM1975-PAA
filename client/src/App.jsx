import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

import ThankYou from "./pages/ThankYou";
import ReviewForm from "./pages/ReviewForm";
import Provider from "./pages/Provider";
import ErrorPage from "./pages/ErrorPage";


import provider from "./data/provider.json"

const App = () => {
    const providers = provider.map((ele, index)=>{
        return {
            path:`${ele.path}`,
            element:<Provider key={index} provider_id={ele.provider_id} />
        }
    })
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
        ...providers
    ];
    
    const routes = createBrowserRouter(route)
    return (
        <>
        <div className="App">
            <RouterProvider router={routes} />
        </div>
        </>
    )
}
export default App;
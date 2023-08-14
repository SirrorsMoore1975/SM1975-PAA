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
            element:<Provider provider_id={ele.provider_id} key={index} />
        }
    })
    const route = [
        {
            path:'/',
            element:<Homepage />
        },
        ...providers,
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
    ];
    console.log("😉",route);
    console.log("😂",providers);
    const routes = createBrowserRouter(route);
    return (
        <>
        <div className="App">
            <RouterProvider router={routes} />
        </div>
        </>
    );
    
}
export default App;
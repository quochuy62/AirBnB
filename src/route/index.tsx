import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/home/home"));
import HomeTemplate from "../templates/home/homeTemplate";

export const router = createBrowserRouter([
    {
        element: <HomeTemplate/>,
        children: [
            {
                path:'',
                element:<Home/>,
            }
        ]
    }
])
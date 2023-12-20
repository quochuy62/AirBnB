import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/home/home"));
const ThongTin = lazy (() => import ("../pages/profile/profile")) ;
import HomeTemplate from "../templates/home/homeTemplate";
import AdminTemplate from "../templates/admin/adminTemplate";
const QuanLyNguoiDung = lazy(() => import("../pages/admin/quan-ly-nguoi-dung")) ;

export const router = createBrowserRouter([
    {
        element: <HomeTemplate/>,
        children: [
            {
                path:'',
                element:<Home/>,
            },
            {
                path:'profile',
                element:<ThongTin/>,
            }
        ]
    },
    {
        element: <AdminTemplate/>,
        children:[
            {
                path:'quanlynguoidung',
                element:<QuanLyNguoiDung/>,
            }

        ]
    }
])
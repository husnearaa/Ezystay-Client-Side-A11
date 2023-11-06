import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import Gallery from "../pages/Gallery/Gallery";
import FAQ from "../pages/FAQ/FAQ";
import AboutUs from "../pages/AboutUs/AboutUs";



const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,    
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
            },
            {
                path: '/myBookings',
                element: <MyBookings></MyBookings>,
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>,
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>,
            },
           
        ]
    }
])

export default myCreatedRoute;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import Gallery from "../pages/Gallery/Gallery";
import FAQ from "../pages/FAQ/FAQ";
import AboutUs from "../pages/AboutUs/AboutUs";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import DetailsRoom from "../pages/RoomDetails/DetailsRoom";



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
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <DetailsRoom></DetailsRoom>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
           
        ]
    }
])

export default myCreatedRoute;
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
import DetailsRoom from "../pages/RoomDetails/DetailsRoom";
import AddReview from "../components/AddReview/AddReview";



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
                path: '/bookings',
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
                element: <PrivateRoute><DetailsRoom></DetailsRoom></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path:'/reviews/:id',
                element:<AddReview></AddReview>,
                loader:({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }
           
        ]
    }
])

export default myCreatedRoute;
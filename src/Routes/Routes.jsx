import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import CheckOut from "../CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/bookings",
                element: <Bookings></Bookings>

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]

    },
]);


import { createBrowserRouter } from "react-router-dom";
import MyAppointent from "../../Dashboard/MyAppointment/MyAppointent";
import DashBoradLayout from "../../Layouts/DashBoradLayout";
import Main from "../../Layouts/Main";
import About from "../../Pages/About/About";
import Appoinment from "../../Pages/Appoinment/Appoinment";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Singin from "../../Pages/SingIn/Singin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<PrivateRoute><Appoinment></Appoinment></PrivateRoute>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            }, 
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/singin',
                element:<Singin></Singin>
            }
        ]
    },{
        path:'/dashboard',
        element:<PrivateRoute> <DashBoradLayout></DashBoradLayout> </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointent></MyAppointent>
            }
        ]
    }
])
export default router;
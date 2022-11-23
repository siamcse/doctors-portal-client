import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor.js/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers.js/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError />,
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
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoutes><AddDoctor /></AdminRoutes>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoutes><ManageDoctors /></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`https://doctors-portal-server-sigma-seven.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;
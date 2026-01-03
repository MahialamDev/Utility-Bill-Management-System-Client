import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Auth/Login/Login";
import Registar from "../Auth/Registar/Registar";
import PrivateRoutes from "../Auth/PrivateRoutes/PrivateRoutes";
import Contact from "../Pages/Contact";
import Bills from "../Pages/Bills";
import BillDetails from "../Components/BillDetails/BillDetails";
import Error404 from "../Components/Error/Error404";
import MyPayBills from "../Pages/MyPayBills";
import Profile from "../Components/Profile/Profile";
import Home from "../Pages/Home/Home";
import HowItWorks from "../Pages/HowItWorks/HowItWorks";
import DashboardLayout from "../Layouts/DashboardLayout";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Registar
            },
            {
                path: 'contact',
                element: <Contact /> 
            },
            {
                path: 'bills',
                Component: Bills
            },
            {
                path: 'how-it-works',
                Component: HowItWorks
            },
            {
                path: 'bill-details/:id',
                element: <PrivateRoutes><BillDetails /></PrivateRoutes>
            },
            
        
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'my-pay-bills',
                element: <MyPayBills />
            },
        ]
    }
]);

export default router;
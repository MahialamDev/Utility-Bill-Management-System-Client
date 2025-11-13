import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Auth/Login/Login";
import Registar from "../Auth/Registar/Registar";
import PrivateRoutes from "../Auth/PrivateRoutes/PrivateRoutes";
import Contact from "../Pages/Contact";
import Bills from "../Pages/Bills";
import BillDetails from "../Components/BillDetails/BillDetails";
import Error404 from "../Components/Error/Error404";
import MyPayBills from "../Pages/MyPayBills";
import Profile from "../Components/Profile/Profile";


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
                element: <PrivateRoutes> <Contact /> </PrivateRoutes>
            },
            {
                path: 'bills',
                Component: Bills
            },
            {
                path: 'bill-details/:id',
                element: <PrivateRoutes><BillDetails /></PrivateRoutes>
            },
            {
                path: 'my-pay-bills',
                element: <PrivateRoutes><MyPayBills /></PrivateRoutes>
            },
            {
                path: 'profile',
                element: <PrivateRoutes> <Profile /> </PrivateRoutes>
            }
            
        ]
    }
]);

export default router;
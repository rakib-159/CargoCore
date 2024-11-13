import {
    createBrowserRouter,
  } from "react-router-dom";
// import RootLayout from "../layout/RootLayout";

import AcManagementContainer from "../pages/AccountManagement/AcManagementContainer";
import CommissionsContainer from "../pages/Commissions/CommissionsContainer";
import LoadManagementContainer from "../pages/LoadManagement/LoadManagementContainer";
// import Reconcile from "../pages/AccountManagement/AcManagementContainer";

import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import DashBoardLayout from "../layout/DashBoardLayout";
import RateCalculator from "../pages/dashboard/rateCalculator/RateCalculator";
import AccManagementInvoice from "../pages/AccountManagement/AccManagementInvoice";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<DashBoardLayout/>,
        children: [
            {
                path:'/',
                element:<Dashboard/>
            },
            //accounts management route start  ---
            {
                path:'/account',
                element:<AcManagementContainer/>
            },
            {
                path:'/acc-invoice',
                element:<AccManagementInvoice/>
            },
           // Commission route--
           {
            path:'/commissions',
            element:<CommissionsContainer/>
           },
           //Load management ==
           {
            path:'/load-management',
            element:<LoadManagementContainer/>
           },
            {
                path: '/rate-calculator',
                element: <RateCalculator/>
            }
        ]
    }
])

export default router;
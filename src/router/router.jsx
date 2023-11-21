import React, { lazy } from "react";
import {  useNavigate, Outlet ,createHashRouter} from "react-router-dom";
import {mapStateToProps, mapDispatchToProps} from '@/redux/contianer'
import Login from "../views/Login";
import {HomePage} from '@/views/HomPage'
const Dashboard = connect(mapStateToProps, mapDispatchToProps)(require("@/views/dashBoard/index"))
const SysComponent = connect(mapStateToProps, mapDispatchToProps)(require("@/views/sysComponent/index"))

import { connect } from 'react-redux';
const routes = [
    {
        path: "/",
        element: <SysComponent/>,
        children: [
            {
                errorElement: <div >error</div>,
                children: [
                    {
                        path: '/test',
                        title: "Dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "form",
                        title: "表单页",
                        element: <div >formformformformformform</div>,
                    },
                    {
                        path: '/sys',
                        element: <SysComponent/>
                    },

                ],
            },
        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
    
    {
        path: '/sysc',
        element: <SysComponent/>
    }
];

export { routes };

export default createHashRouter(routes);
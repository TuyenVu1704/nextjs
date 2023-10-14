import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import UsersPage from "./screens/users.page.tsx";
import { useState } from "react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./App.scss";
// import './index.css'

const items: MenuProps["items"] = [
    {
        label: <Link to={"/"}>Home</Link>,
        key: "home",
        icon: <HomeOutlined />,
    },
    {
        label: <Link to={"users"}>Manage Users</Link>,
        key: "users",
        icon: <UserOutlined />,
    },
];

const Header: React.FC = () => {
    const [current, setCurrent] = useState("home");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

const LayoutAdmin = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutAdmin />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "users",
                element: <UsersPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);

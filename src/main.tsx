import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import UsersPage from "./screens/users.page.tsx";
// import './index.css'

=======
import UsersPage from "./screens/user.page.tsx";
// import './index.css'
>>>>>>> 1ce3ab73136953592d42c8e2f6dfed65baa68fdb
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/users",
        element: <UsersPage />,
    },
<<<<<<< HEAD
]);

=======
    {
        path: "/tracks",
        element: <div>manage tracks</div>,
    },
]);
>>>>>>> 1ce3ab73136953592d42c8e2f6dfed65baa68fdb
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);

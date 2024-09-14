import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootpage from "./pages/Rootpage";
import { Layout } from "./pages/Landingpage/Layout";
import { Login } from "./pages/Login";
import { SinglePersonView } from "./pages/Landingpage/SinglePersonView";
import Register from "./pages/Register";
import AddServices from "./pages/Landingpage/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      {
        path: "id/",
        element: <SinglePersonView />,
      },
    ],
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "register/",
    element: <Register />,
    children: [
      {
        path: "register/addservices/",
        element: <AddServices />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

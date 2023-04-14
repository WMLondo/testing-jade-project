import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import StorePage from "./pages/Store/StorePage";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./component/SignUp/SignUp";
import Login from "./component/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ,
  {
    path: "/iniciar-sesion",
    element: <Login />,
  },
  {
    path: "/registrarme",
    element: <SignUp />,
  },
  {
    path: "/store",
    element: <StorePage />,
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
  ,
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

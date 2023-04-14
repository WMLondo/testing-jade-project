import "boxicons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Layout from "./pages/Layout/PageLayout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tienda",
        element: <Store />,
      },
    ],
  },
  { path: "iniciar-sesion", element: <SignIn /> },
  { path: "registrarme", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

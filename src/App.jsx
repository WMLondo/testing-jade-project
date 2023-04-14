import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Layout from "./pages/Layout/PageLayout";
import SignIn from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { AuthProvider } from "./context/AuthContext";

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
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AuthProvider>
  );
}

export default App;

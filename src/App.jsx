import "./App.css";
import "boxicons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",

        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

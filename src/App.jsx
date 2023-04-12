import "./App.css";
import "boxicons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Theme from "./Theme/Theme";
import Layout from "./pages/Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        default: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <Theme>
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  );
}

export default App;

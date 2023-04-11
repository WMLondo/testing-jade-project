import "./App.css";
import "boxicons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Theme from "./Theme/Theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

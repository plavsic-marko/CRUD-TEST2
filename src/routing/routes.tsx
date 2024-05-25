import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Update from "./Update";
import Add from "./Add";
import Layout from "./Layout";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      { path: "create", element: <Add /> },
      { path: "update/:id", element: <Update /> },
      { path: "homePage", element: <HomePage /> },
    ],
  },
]);

export default router;

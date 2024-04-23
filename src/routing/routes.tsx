import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Update from "./Update";
import Add from "./Add";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "create", element: <Add /> },
      { path: "update/:id", element: <Update /> },
    ],
  },
]);

export default router;

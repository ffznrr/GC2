import { createBrowserRouter } from "react-router-dom";
import HomePage from "../src/views/homePage";
import Detail from "../src/views/details";
import BaseLayout from "../src/views/baseLayout";

const url = "https://ffznrr.dev";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    loader: () => {
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/details/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;

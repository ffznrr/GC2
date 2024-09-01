import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/baseLayout";
import LoginPage from "../views/Login";
import HomePage from "../views/HomePage";
import Toastify from "toastify-js";
import AddPage from "../views/addPage";
import EditPage from "../views/editPage";
import CategoryPage from "../views/categoryPage";
import EditImage from "../views/editImage";
import AddUserPage from "../views/addUserPage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please Login First",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
        return redirect("/");
      }
      return null;
    },
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/add-page",
        element: <AddPage />,
      },
      {
        path: "/edit-page/:id",
        element: <EditPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/edit-image/:id",
        element: <EditImage />,
      },
      {
        path: "/add-user",
        element: <AddUserPage />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export default router;

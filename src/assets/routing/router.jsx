import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivetRoute from "./PrivetRoute";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Details from "../pages/Details/Details";
import Loading from "../components/Loding/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Category/:id",
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("/news.json"),
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Details/:id",
    element: (
      <PrivetRoute>
        <Details />
      </PrivetRoute>
    ),
    hydrateFallbackElement: <Loading />,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/Profile",
    element: (
      <PrivetRoute>
        <Profile />
      </PrivetRoute>
    ),
  },
]);

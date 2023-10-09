import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { MovieDetailedPage } from "./MovieDetailedPage"; // Adjust the path as needed

import { addUser, removeUser } from "../utils/userSlice";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:movieId",
      element: <MovieDetailedPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

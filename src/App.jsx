import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const arrayRouter = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/EventPage",
    element: <EventPage />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

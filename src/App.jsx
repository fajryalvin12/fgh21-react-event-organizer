import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
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
  {
    path: "/BookingPage",
    element: <BookingPage />,
  },
  {
    path: "/PaymentPage",
    element: <PaymentPage />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

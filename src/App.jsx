import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";
import CreateEvent from "./pages/CreateEvent";
import Attendee from "./components/Attendee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const arrayRouter = [
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events/:id",
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
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/MyBooking",
    element: <MyBooking />,
  },
  {
    path: "/MyWishlist",
    element: <MyWishlist />,
  },
  {
    path: "/CreateEvent",
    element: <CreateEvent />,
  },
  {
    path: "/Attendee",
    element: <Attendee />,
  },
];

const router = createBrowserRouter(arrayRouter);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;

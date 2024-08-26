import React from "react";
import NavbarProfile from "../components/NavbarProfile";
import ContentBooking from "../components/ContentBooking";
import { ScrollRestoration } from "react-router-dom";

function BookingPage() {
  return (
    <div>
      <NavbarProfile />
      <ContentBooking />
      <ScrollRestoration />
    </div>
  );
}

export default BookingPage;

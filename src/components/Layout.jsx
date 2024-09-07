import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;

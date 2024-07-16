import React from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Event from "../components/Event";
import DateGrid from "../components/DateGrid";
import BoxWrapper from "../components/BoxWrapper";
import Location from "../components/Location";

function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Event />
      <DateGrid />
      <BoxWrapper />
      <Location />
    </div>
  );
}

export default Home;

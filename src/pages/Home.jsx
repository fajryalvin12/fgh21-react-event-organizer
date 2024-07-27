import React from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Event from "../components/Event";
import DateGrid from "../components/DateGrid";
import BoxWrapper from "../components/BoxWrapper";
import Location from "../components/Location";
import Category from "../components/Category";
import CategoryContent from "../components/CategoryContent";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function Home() {
  return (
    <div className="bg-[#EEEEEE]">
      <Navbar />
      <Cover />
      <Event />
      <DateGrid />
      <BoxWrapper />
      <Location />
      <Category />
      <CategoryContent />
      <Partner />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Cover from "../components/Cover";
import Event from "../components/Event";
import DateGrid from "../components/DateGrid";
import BoxWrapper from "../components/BoxWrapper";
import Location from "../components/Location";
import Category from "../components/Category";
import CategoryContent from "../components/CategoryContent";
import Partner from "../components/Partner";
import Layout from "../components/Layout";

function Home() {
  return (
    <div className="bg-[#EEEEEE]">
      <Layout>
        <Cover />
        <Event />
        <DateGrid />
        <BoxWrapper />
        <Location />
        <Category />
        <CategoryContent />
        <Partner />
      </Layout>
    </div>
  );
}

export default Home;

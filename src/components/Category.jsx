import React from "react";

function Category() {
  return (
    <div className="flex flex-col justify-center items-center mb-[50px] gap-[40px]">
      <div className="bg-[#134B70] h-[30px] py-[5px] px-[30px] items-center flex text-[#EEEEEE] rounded-[30px]">
        <div>Category</div>
      </div>
      <div className="text-[36px] font-semibold">Search the Category below</div>
      <div className="grid md:justify-center gap-8 md:gap-16 mb-[50px] grid-cols-3 md:grid-cols-7 ">
        <div>Music</div>
        <div>Arts</div>
        <div>Outdoors</div>
        <div>Workshop</div>
        <div>Sport</div>
        <div>Festival</div>
        <div>Fashion</div>
      </div>
    </div>
  );
}

export default Category;

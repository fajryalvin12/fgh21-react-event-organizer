import React from "react";

function Category() {
  return (
    <div className="flex flex-col justify-center items-center mb-[50px] gap-[40px]">
      <div className="bg-[#ff3d7140] h-[30px] py-[5px] px-[30px] items-center flex text-[#ff3d71] rounded-[30px]">
        <div>Category</div>
      </div>
      <div className="text-[36px] font-semibold">Browse Events By Category</div>
      <div className="flex justify-center gap-[100px] mb-[50px] flex-col md:flex-row flex-wrap md:flex-nowrap">
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

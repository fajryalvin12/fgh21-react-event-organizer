import React from "react";

function DateGrid() {
  return (
    <div className="flex font-semibold gap-[75px] justify-center mb-[50px] overflow-x-scroll md:overflow-x-auto">
      <div className="p-[10px] align-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center">1</div>
        <div>Mon</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center">2</div>
        <div>Tue</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] border border-[#508C9B] text-[#508C9B]">
        <div className="text-center">3</div>
        <div>Wed</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center">4</div>
        <div>Thu</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center">5</div>
        <div>Fri</div>
      </div>
    </div>
  );
}

export default DateGrid;

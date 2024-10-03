import React from "react";

function DateGrid() {
  return (
    <div className="flex font-semibold gap-[75px] justify-center mb-[50px] overflow-x-scroll md:overflow-x-auto">
      <div className="p-[10px] border border-[#134B70] align-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center font-semibold text-[#134B70]">1</div>
        <div className="font-semibold text-[#134B70]">Mon</div>
      </div>
      <div className="p-[10px] border border-[#134B70] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center font-semibold text-[#134B70]">2</div>
        <div className="font-semibold text-[#134B70]">Tue</div>
      </div>
      <div className="p-[10px] border text-center rounded-[20px] border border-[#508C9B] text-[#508C9B]">
        <div className="text-center font-semibold text-[#134B70]">3</div>
        <div className="font-semibold text-[#134B70]">Wed</div>
      </div>
      <div className="p-[10px] border border-[#134B70] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center font-semibold text-[#134B70]">4</div>
        <div className="font-semibold text-[#134B70]">Thu</div>
      </div>
      <div className="p-[10px] border border-[#134B70] text-center rounded-[20px] text-gray-500 hover:text-[#508C9B] hover:border-[#508C9B] hover:border">
        <div className="text-center font-semibold text-[#134B70]">5</div>
        <div className="font-semibold text-[#134B70]">Fri</div>
      </div>
    </div>
  );
}

export default DateGrid;

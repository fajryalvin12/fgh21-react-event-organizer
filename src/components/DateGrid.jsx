import React from "react";

function DateGrid() {
  return (
    <div className="flex font-semibold gap-[75px] justify-center mb-[50px]">
      <div className="p-[10px] align-center rounded-[20px] border text-gray-500">
        <div className="text-center">13</div>
        <div>Mon</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] border text-gray-500">
        <div>14</div>
        <div>Tue</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] border border-[#ff8900] text-[#ff8900]">
        <div>15</div>
        <div>Wed</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] border text-gray-500">
        <div>16</div>
        <div>Thu</div>
      </div>
      <div className="p-[10px] text-center rounded-[20px] border text-gray-500">
        <div>17</div>
        <div>Fri</div>
      </div>
    </div>
  );
}

export default DateGrid;

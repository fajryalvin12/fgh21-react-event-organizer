import React from "react";
import { FaGitlab } from "react-icons/fa6";

function Partner() {
  return (
    <div className="flex flex-col justify-center items-center mb-[50px] bg-[#201E43] text-[#ffff] gap-[30px]">
      <div className="bg-[#696B71] h-[30px] py-[5px] px-[30px] items-center flex text-[#ffff] rounded-[30px] mt-[39px]">
        <div>Partner</div>
      </div>
      <div className="text-[36px] font-semibold">Lets Collab With Us</div>
      <div className="mb-[50px]">Here's the partner :</div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-12 pb-16">
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
        <div className="text-[48px] text-[#508C9B]">
          <FaGitlab />
        </div>
      </div>
    </div>
  );
}

export default Partner;

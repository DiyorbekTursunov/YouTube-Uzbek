import React from "react";
import CategorysData from "../DB/CategoryDB";
const Categorys = ({ selectHendel, selectedCatigory }) => {
  return (
    <div className="text-white flex lg:gap-[20px] mb-3 md:gap-[5px] overflow-x-scroll kategory-scroll pb-2">
      {CategorysData.map((e) => {
        return (
          <button data-testId="TestApp"
            className="py-[8px] whitespace-nowrap px-[12px] rounded-[32px] border-[2px] border-[#303030] cursor-pointer "
            id={e.title === selectedCatigory ? "Selected" : "UnSelected"}
            onClick={() => selectHendel(e.title)}
            key={e.id}
          >
            <span>{e.title}</span>
          </button>
        );
      })}
    </div>
  );
};
export default Categorys;

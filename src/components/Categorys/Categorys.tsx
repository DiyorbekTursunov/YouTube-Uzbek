import CategorysData from "../DB/CategoryDB";

interface CategorysProps {
  selectHendel: (title: string) => void, // Assuming selectHendel takes a string parameter and returns void
  selectedCatigory: string
}

const Categorys = ({ selectHendel, selectedCatigory }: CategorysProps) => {
  return (
    <div className="text-white flex lg:gap-[20px] mb-3 md:gap-[15px] sm:gap-4 max-sm:gap-3  overflow-x-scroll kategory-scroll pb-2 pl-7 mt-3 ">
      {CategorysData.map((e) => {
        return (
          <button
            className={`py-[8px] whitespace-nowrap h-8 rounded-lg outline-none text-[14px] font-medium px-3 transition-all cursor-pointer ${e.title === selectedCatigory ? "Selected" : "UnSelected"}`}
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

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../images/search.png";

export function SearchInput() {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  function SubmitHandel(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  }

  return (
    <form
      onSubmit={SubmitHandel} 
      className="xl:min-w-[536px] flex items-center  border-[1px] border-[#606060] bg-[hsl(0, 0%, 7%);] rounded-l-[20px] rounded-r-[20px]"
    >
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        className="bg-[#121212] border-[2px] border-black h-[40px] pl-4  w-full px-2 text-[hsla(0,100%,100%,0.88)] placeholder:text-[#a9a9a9]  max-sm:w-[150px] rounded-l-[20px]"
        placeholder="Search"
        onChange={(e) => setvalue(e.target.value)}
      />
      <div className=" bg-[#323232] flex items-center justify-center w-16 h-10 rounded-r-[20px] cursor-pointer">
        <button className="w-6 h-6" type="submit">
          <img src={SearchIcon} alt="Search Input" className="cursor-pointer w-full h-full" />
        </button>
      </div>
    </form>
  );
}

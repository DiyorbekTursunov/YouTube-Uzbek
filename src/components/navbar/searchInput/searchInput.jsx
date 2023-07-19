import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../images/search.png";
function SearchInput() {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  function SubmitHandel(e) {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  }
  return (
    <div className="flex items-center  ">
      <form
        onSubmit={SubmitHandel}
        className="xl:w-[450px]  flex items-center "
      >
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          className="bg-[#121212] border-[2px] border-black  w-[362px] h-[40px] px-2 text-[#AAAAAA] max-sm:w-[150px]"
          placeholder="Search"
          onChange={(e) => setvalue(e.target.value)}
        />
        <label htmlFor="searchInput" className=" bg-[#323232] h-[40px] flex items-center">
          <img src={SearchIcon} alt="Search Input" className="px-5 cursor-pointer" onClick={(e) => SubmitHandel(e)} />
        </label>
      </form>
    </div>
  );
}

export default SearchInput;

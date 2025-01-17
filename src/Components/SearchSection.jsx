import { useContext, useState } from "react";
import CountriesContext from "../Context/CountriesContext";

export default function SearchSection() {

  const {setFilteredCountries} = useContext(CountriesContext);
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    setSearchValue(e.target.value);
    const allCountries = JSON.parse(localStorage.getItem("countries"));
    const filteredCountries = allCountries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredCountries(filteredCountries);
  }

  function preventSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={preventSubmit} className="flex h-14 w-[480px] max-w-full overflow-hidden rounded-full bg-gray-50 shadow-myShadow dark:bg-gray-800">
      <button className="pe-3 ps-8">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#374151] dark:fill-gray-100"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            />
          </g>
        </svg>
      </button>
      <input
        className="flex-1 bg-gray-50 px-3 text-[#374151] outline-none placeholder:text-[#374151] dark:bg-gray-800 dark:text-gray-100 placeholder:dark:text-gray-100"
        placeholder="Search for a country..."
        type="search"
        name=""
        id=""
        onChange={handleSearch}
        value={searchValue}
      />
    </form>
  );
}

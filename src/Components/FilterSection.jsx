import { useContext, useState } from "react";
import CountriesContext from "../Context/CountriesContext";

export default function FilterSection() {
  const [filterValue, setFilterValue] = useState("All Regions");
  const [showFilter, setShowFilter] = useState(false);
  const { setCountries } = useContext(CountriesContext);

  function toggleFilter() {
    setShowFilter(!showFilter);
  }

  function handleFilter(e) {
    const filterValue = e.target.textContent;
    e.preventDefault();
    setFilterValue(filterValue);
    setShowFilter(false);
    const allCountries = JSON.parse(localStorage.getItem("countries"));
    let filteredCountries = [];
    if(filterValue === "Africa") {
      filteredCountries = allCountries.filter((country) => country.region === "Africa");
    } else if(filterValue === "Americas") {
      filteredCountries = allCountries.filter((country) => country.region === "Americas");
    } else if(filterValue === "Asia") {
      filteredCountries = allCountries.filter((country) => country.region === "Asia");
    } else if(filterValue === "Europe") {
      filteredCountries = allCountries.filter((country) => country.region === "Europe");
    } else if(filterValue === "Oceania") {
      filteredCountries = allCountries.filter((country) => country.region === "Oceania");
    } else {
      filteredCountries = allCountries;
    }
    setCountries(filteredCountries);
  }

  return (
    <div onClick={toggleFilter} className="flex relative flex-col gap-1 dark:text-gray-100">
      <div className="flex justify-between shadow-myShadow h-12 w-52 cursor-pointer items-center rounded-md bg-gray-50 dark:bg-gray-800 px-4 py-6">
        {filterValue}
        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-current" xmlns="http://www.w3.org/2000/svg">
<g id="expand-more">
<path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M6.875 0.875L4 3.75L1.125 0.875L0.25 1.75L4 5.5L7.75 1.75L6.875 0.875Z" />
</g>
</svg>

      </div>
      {showFilter && (
        <ul className="absolute top-14 w-full shadow-my flex flex-col gap-1 rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-4">
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "All Regions" ? "bg-gray-100 text-gray-900" : ""}`}>
            All Regions
          </li>
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "Africa" ? "bg-gray-100 text-gray-900" : ""}`}>
            Africa
          </li>
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "Americas" ? "bg-gray-100 text-gray-900" : ""}`}>
            Americas
          </li>
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "Asia" ? "bg-gray-100 text-gray-900" : ""}`}>Asia</li>
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "Europe" ? "bg-gray-100 text-gray-900" : ""}`}>
            Europe
          </li>
          <li onClick={handleFilter} className={`cursor-pointer transition hover:bg-gray-100 p-2 hover:text-gray-900 ${filterValue === "Oceania" ? "bg-gray-100 text-gray-900" : ""}`}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}

import { useState } from "react";

export default function FilterSection() {
  const [filterValue, setFilterValue] = useState("Filter by Region");
  const [showFilter, setShowFilter] = useState(false);

  function toggleFilter() {
    setShowFilter(!showFilter);
  }

  function handleFilter(e) {
    e.preventDefault();
    setFilterValue(e.target.textContent);
    setShowFilter(false);
  }

  return (
    <div onClick={toggleFilter} className="flex relative flex-col gap-1 dark:text-gray-100">
      <div className="flex justify-between shadow-myShadow flex h-12 w-52 cursor-pointer items-center rounded-md bg-gray-50 dark:bg-gray-800 px-4 py-6">
        {filterValue}
        <svg width="12" height="10" viewBox="0 0 8 6" className="fill-current" xmlns="http://www.w3.org/2000/svg">
<g id="expand-more">
<path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M6.875 0.875L4 3.75L1.125 0.875L0.25 1.75L4 5.5L7.75 1.75L6.875 0.875Z" />
</g>
</svg>

      </div>
      {showFilter && (
        <ul className="absolute top-14 w-full shadow-my flex flex-col gap-1 rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-4">
          <li onClick={handleFilter} className="cursor-pointer transition hover:bg-gray-100 p-2">
            Africa
          </li>
          <li onClick={handleFilter} className="cursor-pointer transition hover:bg-gray-100 p-2">
            Americas
          </li>
          <li onClick={handleFilter} className="cursor-pointer transition hover:bg-gray-100 p-2">Asia</li>
          <li onClick={handleFilter} className="cursor-pointer transition hover:bg-gray-100 p-2">
            Europe
          </li>
          <li onClick={handleFilter} className="cursor-pointer transition hover:bg-gray-100 p-2">
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}

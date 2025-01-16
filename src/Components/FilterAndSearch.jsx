import FilterSection from "./FilterSection";
import SearchSection from "./SearchSection";

export default function FilterAndSearch() {
  return (
    <div>
      <div className="container flex flex-col gap-10 items-center justify-between md:flex-row md:gap-0">
        <SearchSection />
        <FilterSection />
      </div>
    </div>
  );
}

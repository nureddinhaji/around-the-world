import CountryCard from "./CountryCard";

export default function CountriesList() {
  return (
    <div className="container grid gap-16 grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-items-center mt-12">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
}

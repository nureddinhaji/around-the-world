import { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";
import CountriesContext from "../Context/CountriesContext";

export default function CountriesList() {

    const {countries, isLoading, isError} = useContext(CountriesContext);

  return (
    <div className={`container ${isLoading || isError ? "flex items-center justify-center h-[calc(100vh-4rem)]" : "grid gap-16 grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-items-center mt-12" }`}>
      {isLoading ? (
          <Loader />
      ) : isError ? (
          <p className="text-2xl text-red-500">Something went wrong!</p>
      ) : (
        countries.map((country) => {
          return (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
            />
          );
        })
      )}
      </div>
  )
}

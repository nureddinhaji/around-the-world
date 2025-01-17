import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Loader from "./Loader";

export default function CountriesList() {

    const initialCountries = JSON.parse(localStorage.getItem("countries")) || [];

    const [countries, setCountries] = useState(initialCountries);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Save data to local storage
    useEffect(() => {
        localStorage.setItem("countries", JSON.stringify(countries));
      }, [countries]);

    // Fetch Contries List
    useEffect(() => {
      if (initialCountries.length > 0) {
        return;
      }
      setIsLoading(true)
        fetch("https://restcountries.com/v3.1/all")
          .then((response) => response.json())
          .then((data) => {
            setCountries(data);
          })
          .catch(() => {
            setIsError(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }, []);

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

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

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
    <>
      {isLoading ? (
        <div className='container flex items-center justify-center h-[calc(100vh-4rem)]'>
          <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-gray-900 dark:text-gray-50 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        </div>
        
      ) : isError ? (
        <div className="container flex items-center justify-center h-[calc(100vh-4rem)]">
          <p className="text-2xl text-red-500">Something went wrong!</p>
        </div>
      ) : (
        <div className="container grid gap-16 grid-cols-[repeat(auto-fill,minmax(264px,1fr))] justify-items-center mt-12">
        {countries.map((country) => {
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
        })}
        </div>
      )};
      </>
  )
}

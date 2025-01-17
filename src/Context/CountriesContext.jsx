import { createContext, useEffect, useState } from "react";

const CountriesContext = createContext();

export default CountriesContext;

export function CountriesProvider({ children }) {
  const initialCountries = JSON.parse(localStorage.getItem("countries")) || [];

  const [allCountries, setAllCountries  ] = useState(initialCountries);
  const [filteredCountries, setFilteredCountries] = useState(initialCountries);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  // Fetch Contries List
  useEffect(() => {
    if (initialCountries.length > 0) {
      return;
    }
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setAllCountries(data);
        setFilteredCountries(data);
        localStorage.setItem("countries", JSON.stringify(data));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <CountriesContext.Provider value={{ allCountries, setAllCountries, filteredCountries, setFilteredCountries, isLoading, isError }}>{children}</CountriesContext.Provider>
  );
}

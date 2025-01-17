import { createContext, useEffect, useState } from "react";

const CountriesContext = createContext();

export default CountriesContext;

export function CountriesProvider({ children }) {
  const initialCountries = JSON.parse(localStorage.getItem("countries")) || [];

  const [countries, setCountries] = useState(initialCountries);
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
        setCountries(data);
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
    <CountriesContext.Provider value={{ countries, isLoading, isError, setCountries }}>{children}</CountriesContext.Provider>
  );
}

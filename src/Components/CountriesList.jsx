import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesList() {

    const initialCountries = JSON.parse(localStorage.getItem("countries")) || [];

    const [countries, setCountries] = useState(initialCountries);

    // Save data to local storage
    useEffect(() => {
        localStorage.setItem("countries", JSON.stringify(countries));
      }, [countries]);

    // Fetch Contries List
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((response) => response.json())
          .then((data) => {
            setCountries(data);
            console.log(data);
          });
      }, []);

  return (
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
  );
}

import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import CountriesContext from "../Context/CountriesContext";
import EmptySearch from "../Components/EmptySearch";

export default function Country() {
    const params = useParams();

    const {allCountries} = useContext(CountriesContext);

    const countryData = allCountries.find(country => country.name.common === params.country);


    return (
                !countryData ? <div className="container pb-10 flex items-center justify-center h-[calc(100vh-4rem)]  flex-col dark:text-gray-100 gap-4"><EmptySearch /></div> : <div className="container space-y-10"><div>
                <Link to='/' className="group flex justify-center items-center bg-gray-50 dark:bg-gray-800 dark:text-gray-100 w-10 h-10 rounded-md shadow-[0px_6px_14px_0px_#0000000A]"><svg className='group-hover:animate-bounce-x transition-transform duration-300 ease-in-out' width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.89269 0.535534L7.0712 1.71405L3.18211 5.60313L18.0314 5.60313L18.0314 7.25305L3.18211 7.25305L7.0712 11.1421L5.89269 12.3206L0.000132627 6.42809L5.89269 0.535534Z" className='fill-current'/></svg></Link>
                </div>
            <div className="flex flex-col gap-11 md:flex-row">
                <div className="flex-1">
                    <img className="w-full max-w-[560px] rounded-lg" src={countryData.flags.svg} alt={countryData.name.common} />
                </div>
                <div className="pt-5 flex-1 flex flex-col gap-7 text-gray-900 dark:text-gray-50"> 
                    <h2 className="text-3xl font-extrabold">{countryData.name.common}</h2>
                    <div className="flex flex-col gap-8 md:flex-row">
                    <ul className='space-y-2'>
                        <li className="space-x-1"><span className="font-semibold">Native Name:</span><span className="font-light">{countryData.name.official}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Population:</span><span className="font-light">{parseInt(countryData.population).toLocaleString()}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Region:</span><span className="font-light">{countryData.region}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Sub Region:</span><span className="font-light">{countryData.subregion}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Capital:</span><span className="font-light">{countryData.capital}</span></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li className="space-x-1"><span className="font-semibold">Top Level Domain:</span><span className="font-light">{countryData.tld[0]}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Currencies:</span><span className="font-light">{countryData.currencies[Object.keys(countryData.currencies)[0]].name}</span></li>
                        <li className="space-x-1"><span className="font-semibold">Languages:</span><span className="font-light">{Object.values(countryData.languages).map((lang) => lang)}</span></li>
                    </ul>
                    </div>
                </div>
            </div></div>
    )
}
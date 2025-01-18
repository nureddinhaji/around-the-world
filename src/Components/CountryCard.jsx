import { Link } from "react-router-dom";

export default function CountryCard({name,population,region,capital,flag}) {
    return(
        <Link to={`/country/${name}`} className="shadow-myShadow px-3 pt-3 pb-9 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-[10px] flex flex-col gap-4 w-64 hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
            <div className="w-full h-40 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" src={flag} alt={`flag of ${name}`} />
            </div>
            <h2 className="text-lg font-extrabold">{name}</h2>
            <div>
                <p className="text-sm space-x-1"><span className="font-semibold">Population:</span><span className="font-light">{population}</span></p>
                <p className="text-sm  space-x-1"><span className="font-semibold">Region:</span><span className="font-light">{region}</span></p>
                <p className="text-sm  space-x-1"><span className="font-semibold">Capital:</span><span className="font-light">{capital}</span></p>
            </div>
        </Link>
    )
}
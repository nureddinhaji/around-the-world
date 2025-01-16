export default function CountryCard() {
    return(
        <a href="#" className="shadow-myShadow px-3 pt-3 pb-9 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-[10px] flex flex-col gap-4 w-64">
            <div >
                <img src="/flag.png" alt="flag" />
            </div>
            <h2 className="text-lg font-extrabold">Palestine</h2>
            <div>
                <p className="text-sm space-x-1"><span className="font-semibold">Population:</span><span className="font-light">5,101,414</span></p>
                <p className="text-sm  space-x-1"><span className="font-semibold">Region:</span><span className="font-light">Asia</span></p>
                <p className="text-sm  space-x-1"><span className="font-semibold">Capital:</span><span className="font-light">AlQuds</span></p>
            </div>
        </a>
    )
}
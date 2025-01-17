import CountriesList from "./Components/CountriesList"
import FilterAndSearch from "./Components/FilterAndSearch"
import Header from "./Components/Header"
import  {CountriesProvider} from "./Context/CountriesContext"

function App() {

  return (
      <CountriesProvider>
      <Header />
      <FilterAndSearch />
      <CountriesList />
      </CountriesProvider>
  )
}

export default App

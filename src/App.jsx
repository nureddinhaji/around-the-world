
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  {CountriesProvider} from "./Context/CountriesContext"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Country from "./pages/Country"
import NotFound from "./pages/NotFound"


function App() {
  return (
      <CountriesProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/:country' element={<Country />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
        </BrowserRouter>
      
      </CountriesProvider>
  )
}

export default App

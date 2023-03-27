import SearchApp from "./body/searcher/SearchApp";
import Menu from "./header/Menu";
import ServiceNote from "./body/serviceNote/ServiceNote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllServices from "./body/serviceNote/AllServices";


function App() {
  return (
    <>

      
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/elevator_searchbar" element={<SearchApp />} />
        <Route path="/serviceNote" element={<ServiceNote />}/>
        <Route path="/allServices" element={<AllServices/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

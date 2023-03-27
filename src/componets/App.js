import SearchApp from "./body/searcher/SearchApp";
import Menu from "./header/Menu";
import ServiceNote from "./body/serviceNote/ServiceNote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllServices from "./body/serviceNote/AllServices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="elevator_app" element={<SearchApp />} />
          <Route path="elevator_app/serviceNote" element={<ServiceNote />} />
          <Route path="elevator_app/allServices" element={<AllServices />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

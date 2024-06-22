import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import Employees from "./pages/Employees";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

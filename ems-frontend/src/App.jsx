import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <HeaderComponent />

        <div className="container content">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
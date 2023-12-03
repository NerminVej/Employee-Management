import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { Employee } from "./components/Employee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { UpdateEmployee } from "./components/UpdateEmployee";
import LoginPage from "./components/LoginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          {/* <Route index element={<EmployeeList />} /> */}
          <Route index element={<LoginPage />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

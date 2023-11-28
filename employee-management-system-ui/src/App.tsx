import { Route, Routes } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { Employee } from "./components/Employee";
import { EmployeeList } from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { UpdateEmployee } from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<EmployeeList />} />
       
      </Routes>
    </div>
  );
}

export default App;

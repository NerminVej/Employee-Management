import { AddEmployee } from "./components/AddEmployee";
import { Employee } from "./components/Employee";
import { EmployeeList } from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { UpdateEmployee } from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Navbar />
      <AddEmployee />
      <Employee />
      <EmployeeList />
      <UpdateEmployee />
    </div>
  );
}

export default App;

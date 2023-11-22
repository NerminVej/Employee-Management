import { AddEmployee } from "./components/AddEmployee";
import { Employee } from "./components/Employee";
import { EmployeeList } from "./components/EmployeeList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AddEmployee />
      <Employee />
      <EmployeeList />
    </div>
  );
}

export default App;

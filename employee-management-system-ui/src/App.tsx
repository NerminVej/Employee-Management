import { AddEmployee } from "./components/AddEmployee";
import { Employee } from "./components/Employee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AddEmployee />
      <Employee />
    </div>
  );
}

export default App;

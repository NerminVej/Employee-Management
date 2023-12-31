import axios from "axios";
import { EmployeeType } from "../types/types";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  saveEmployee(employee: EmployeeType) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id: string) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }
  getEmployeeById(id: string) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee: EmployeeType, id: string | undefined) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();

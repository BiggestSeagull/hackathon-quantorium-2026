import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("employees", "routes/employees.tsx"),
  route("employees/:employeeId", "routes/employee.tsx"),
  route("*", "routes/not-found.tsx"),
];
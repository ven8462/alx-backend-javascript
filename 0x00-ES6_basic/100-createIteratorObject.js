export default function createIteratorObject(report) {
  // Get all departments
  const departments = Object.values(report.allEmployees);
  // Initialize department and employee indices
  let departmentIndex = 0;
  let employeeIndex = 0;

  // Create a generator function
  function* generateEmployees() {
    while (departmentIndex < departments.length) {
      const employees = departments[departmentIndex];
      while (employeeIndex < employees.length) {
        yield employees[employeeIndex];
        employeeIndex += 1;
      }
      // Reset the employee index and move to the next department
      departmentIndex += 1;
      employeeIndex = 0;
    }
  }

  // Return the generator function
  return generateEmployees();
}

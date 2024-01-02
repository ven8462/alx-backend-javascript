export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store the employee names
  const employeeNames = [];

  // Use a for...of loop to iterate through the iterator
  for (const employees of reportWithIterator) {
    // Use another for...of loop to iterate through each employee in the current department
    for (const employee of employees) {
      // Add the employee name to the array
      employeeNames.push(employee);
    }
  }

  // Join the employee names into a string, separated by ' | '
  const employeeString = employeeNames.join(' | ');

  // Return the string
  return employeeString;
}

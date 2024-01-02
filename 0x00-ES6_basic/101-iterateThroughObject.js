export default function iterateThroughObject(reportWithIterator) {
    // Initialize an empty array to store the employee names
    let employeeNames = [];
   
    // Use a for...of loop to iterate through the iterator
    for (let employees of reportWithIterator) {
     // Use another for...of loop to iterate through each employee in the current department
     for (let employee of employees) {
       // Add the employee name to the array
       employeeNames.push(employee);
     }
    }
   
    // Join the employee names into a string, separated by ' | '
    let employeeString = employeeNames.join(' | ');
   
    // Return the string
    return employeeString;
   }
   
const fs = require('fs');

function countStudents(path) {
  try {
    const contents = fs.readFileSync(path, { encoding: 'utf-8' });
    const lines = contents.split('\n');
    let numStudents = 0;
    const courseStudent = {};
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i].trim()) {
        const line = lines[i].split(',');
        const firstName = line[0];
        const field = line[line.length - 1];
        if (field in courseStudent) {
          courseStudent[field].push(firstName);
        } else {
          courseStudent[field] = [firstName];
        }
        numStudents += 1;
      }
    }
    console.log(`Number of students: ${numStudents}`);
    for (const [field, students] of Object.entries(courseStudent)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

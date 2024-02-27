const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
      let numStudents = 0;
      const courseStudents = {};
      for (let i = 1; i < lines.length; i += 1) {
        if (lines[i].trim()) {
          const line = lines[i].split(',');
          const firstName = line[0];
          const field = line[line.length - 1];
          if (field in courseStudents) {
            courseStudents[field].push(firstName);
          } else {
            courseStudents[field] = [firstName];
          }
          numStudents += 1;
        }
      }
      const messages = [
        `Number of students: ${numStudents}`,
      ];
      console.log();
      for (const [field, students] of Object.entries(courseStudents)) {
        messages.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve(messages);
    }
  });
});

const app = http.createServer();

app.on('request', async (req, res) => {
  switch (req.url) {
    case '/students':
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((messages) => {
          const final = `${messages.join('\n')}`;
          res.statusCode = 200;
          res.end(final);
        }).catch((err) => {
          const final = `${err.message}`;
          res.statusCode = 404;
          res.end(final);
        });
      break;
    default:
      res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;

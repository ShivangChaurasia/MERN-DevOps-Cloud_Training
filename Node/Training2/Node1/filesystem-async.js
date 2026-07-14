const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const renamedPath = path.join(__dirname, 'example-renamed.txt');

// 1. Create a file
fs.writeFile(filePath, 'Hello from Node.js\n', (err) => {
  if (err) throw err;
  console.log('File created');
});

// 2. Append data to the file
fs.appendFile(filePath, 'This line was added later.\n', (err) => {
  if (err) throw err;
  console.log('Data appended');
});

// 3. Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:');
  console.log(data);
});

// 4. Rename the file
fs.rename(filePath, renamedPath, (err) => {
  if (err) throw err;
  console.log('File renamed');
});

// 5. Delete the renamed file
fs.unlink(renamedPath, (err) => {
  if (err) throw err;
  console.log('File deleted');
});

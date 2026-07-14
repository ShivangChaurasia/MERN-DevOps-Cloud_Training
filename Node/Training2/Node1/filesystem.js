const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const renamedPath = path.join(__dirname, 'example-renamed.txt');


// 1. Create a file
// fs.writeFileSync(filePath, 'Hello from Node.js\n');
// console.log('File created');

// 2. Append data to the file
// fs.appendFileSync(filePath, 'This line was added later.\n');
// console.log('Data appended');

// 3. Read the file
// const data = fs.readFileSync(filePath, 'utf8');
// console.log('File content:');
// console.log(data);

// 4. Rename the file
// fs.renameSync(filePath, renamedPath);
// console.log('File renamed');

// 5. Delete the renamed file
// fs.unlinkSync(renamedPath);
// console.log('File deleted');

const fs = require('fs');
const filePath = process.argv[2];
const fileBuffer =  fs.readFileSync(filePath);
const bufferStr = fileBuffer.toString();
const splitLines = bufferStr.split("\n");
console.log(splitLines.length-1);
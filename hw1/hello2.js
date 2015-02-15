#!/usr/bin/env node
var fs = require('fs');
var infile = "hello.txt";
var textBuffer = fs.readFileSync(infile);

  
console.log("Script: " + __filename + "\nWrote: " + "To: " + textBuffer.toString());
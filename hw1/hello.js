#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

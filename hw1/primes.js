#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt"; // textfile name

var natural = new Array(); // natural numbers
var prime = new Array(); // primes number

// Enter the first 100 numbers in the natural Array

for(var i = 0; i < 542; i++){
	natural.push(i+1);
	//console.log(natural[i]);
}

// 
var isPrime = function(n){
	//(int) -> Bool
	if (n <= 1){
		return false;
	}
	if (n == 2){
		return true;
	}
	for(var i = 2; i <= Math.ceil(Math.sqrt(n)); i++){
		if (n % i == 0){
			return false;
		}
	}return true;
}

for(var j = 0; j < natural.length; j++){
	if(isPrime(natural[j])){
		prime.push(natural[j]);
		//console.log(natural[j]);
	}
}

fs.writeFileSync(outfile, "");
for(var j = 0; j < prime.length - 1 ; j++){
	fs.appendFileSync(outfile, prime[j] + ',');
}fs.appendFileSync(outfile, prime[prime.length-1]);


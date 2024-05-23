#!/usr/bin/node

if (Number(process.argv[2]) && Number(process.argv[2] != 1)) {
	let ezra = Number(process.argv[2]);
	let sum = 1;
	while(ezra > 1) {
		sum *= (ezra * (ezra - 1));
		ezra -= 2;
	}
	console.log(sum);
}
else {
	console.log(1);
}

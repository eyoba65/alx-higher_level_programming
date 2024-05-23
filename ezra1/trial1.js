#!/usr/bin/node

if (isNaN(process.argv[2])) {
	console.log('Missing size');
}
else {
	let ezra = Number(process.argv[2]);
	while (ezra) {
	let str = '';
	let joss = Number(process.argv[2]);
		while (joss) {
		str += 'X';
		joss -= 1;
		}
		console.log(str);
		ezra -= 1;
	}
}

#!/usr/bin/node

if (Number(process.argv[2])  && Number(process.argv[3])) {
	let one = Number(process.argv[2]);
	let two = Number(process.argv[3]);
	sum = one + two;
	console.log(sum);
}
else {
	console.log('NaN');
}

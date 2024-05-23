#!/usr/bin/node

if (!process.argv[3] || !Number(process.argv[2])) {
	console.log('0');
}
else {
	let i = 2;
	let large = 0;
	let small = 0;
	let arr = [];
	while (process.argv[i]) {
		let ezra = Number(process.argv[i - 1]);
		let joss = Number(process.argv[i]);
		arr[i - 2] = joss;;
		if (ezra > joss) {
			small = large;
			large = ezra;
		}
		else {
			small = large;
			large = joss;
		}
		i += 1;
	}
	let j = 1;
	while (arr[j]) {
		if (arr[j] > arr[j - 1]) {
			large = arr[j];
		}
		else {
			large = arr[j - 1];
		}
		console.log(large);
		j += 1;
	}

}

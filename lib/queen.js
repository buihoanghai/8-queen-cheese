const _ = require("lodash");
let t = 0;
function putAtPos(arr, row, col) {
	var result =JSON.parse(JSON.stringify(arr));
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if ((row === i || col === j)) {
				if (row === i && col === j) {
					result[i][j] = "x";
				} else {
					result[i][j] = result[i][j] === "x" ? "x": 1;
				}
			}
			if (((row + col) === (i + j) || ((row - col) === (i - j)))) {
				if (row === i && col === j) {
					result[i][j] = "x";
				} else {
					result[i][j] = result[i][j] === "x" ? "x": 1;
				}
			}
			// console.log("row", i, j, "x y", x, y, result[i][j]);
		}
	}
	 // console.log(JSON.stringify(result));
	return result;
}

function fistStep(arr) {

	for (let i = 0; i < arr.length; i++) {
		// console.log(i);
		putNextStep(putAtPos(arr, 0, i),1, 1);
	}
}

function main() {
	console.time("test");
	var arr = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0]
	];
	fistStep(arr);
	console.timeEnd("test");

}

function putNextStep(arr, count, row) {
	if(count === 8){
		t++;
		// console.log(JSON.stringify(arr));
		console.log("\n", t);
		print(arr);
		return;

	}
	for (let i = row; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i][j] === 0) {
				putNextStep(putAtPos(arr, i, j), count + 1, row +1);
			}
		}
	}

}
function print(arr){
	for (let i = 0;i< arr[0].length;i++){
		console.log(arr[i].join('\t'));
		console.log('\n');
	}
}
let revealed = {
	putAtPos: putAtPos,
	main:main
};

module.exports = revealed;

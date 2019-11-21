// 1. Function that returns type "any"
const json = { x: 10, y: 5 };
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2. When we declare a variable on one line and initialize it later
let words: string[] = [ 'smile', 'laugh', 'cry', 'face', 'leg' ];
let foundWord: boolean; // if type is not set explicitly, it will be set to "any"

words.forEach((word: string) => {
	if (word === 'face') foundWord = true;
});

// 3. Variables whose type can't be inferred correctly
const numberArray: number[] = [ 1, 2, 3, 5, -7, -10 ];
let numberAboveZero: boolean | number = false;

numberArray.forEach((number: number) => {
	if (number > 0) {
		numberAboveZero = number;
	}
});

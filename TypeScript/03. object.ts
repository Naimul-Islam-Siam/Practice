const complex: { data: number[]; output: (all: boolean) => number[] } = {
	data: [ 100, 200, 300, 400.5 ],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

//complex is an object that has 2 properties data & output
//data must be an array of numbers
//output must be a function
//output must have one argument which is of boolean type
//output must return an array of numbers

// ================
// type alias
// ================
type Complex = { data: number[]; output: (all: boolean) => number[] }; // reusable type declaration

let complex2: Complex = {
	data: [ 100, 200, 300, 400.5 ],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

let complex3: Complex = {
	data: [ 100, 200, 300, 400.5 ],
	output: function(all: boolean): number[] {
		return this.data;
	}
};

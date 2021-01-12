function sayHi() {
	console.log(name);
	console.log(age);
	var name = 'Snigdho';
	let age = 21;
}
console.log(sayHi()); // Undefined // Reference Error(Cannot access 'age' before initialization)

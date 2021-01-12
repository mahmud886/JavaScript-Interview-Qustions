function Person(fName, lName) {
	this.fName = fName;
	this.lName = lName;
}
const member = new Person('Lydia', 'Hallie');
const getFullName = function () {
	return `${this.fName} ${this.lName}`;
};

console.log(Person.getFullName());

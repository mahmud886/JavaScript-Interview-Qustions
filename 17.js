function getPersonInfo(one, two, ...three) {
	console.log(one);
	console.log(two);
	console.log(three);
}
const person = 'Sarah';
const pc = 'Mac';
const age = 21;

getPersonInfo`${person} is ${pc} years old and have ${age} pc.`;

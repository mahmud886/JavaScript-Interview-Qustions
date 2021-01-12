const bird = {
	size: 'Small',
};
const mouse = {
	name: 'Micky',
	size: true,
};

const a = mouse.name.size;

const b = mouse[bird.size];

const c = mouse[bird['size']];

console.log(a);
console.log(b);
console.log(c);

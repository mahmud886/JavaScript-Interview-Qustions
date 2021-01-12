function checkAge(data) {
	if (data === { age: 18 }) {
		console.log('You are an adult...');
	} else if (data == { age: 18 }) {
		console.log('Your are still adult...');
	} else {
		console.log('hmm .. your  dont have and age u guess...');
	}
}

checkAge({ age: 18 });

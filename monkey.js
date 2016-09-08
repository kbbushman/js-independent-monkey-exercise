var monkey1 = {
	name: "Lumpy",
	species: "Macaque",
	foodsEaten: "Bananas",
	eatSomething: "This is a string",
	introduce: function introduction() {
		console.log('Hi, my name is' + ' ' + this.name + '. I am a' + ' ' + this.species + '. Today, I have eaten' + ' ' + this.foodsEaten + '.')
	}
}

var monkey2 = {
	name: "Bumpy",
	species: "Golden lion tamarin",
	foodsEaten: "Bugs",
	eatSomething: "This is a string",
	introduce: function introduction() {
		console.log('Hi, my name is' + ' ' + this.name + '. I am a' + ' ' + this.species + '. Today, I have eaten' + ' ' + this.foodsEaten + '.')
	}
}

var monkey3 = {
	name: "Stumpy",
	species: "Yellow Baboon",
	foodsEaten: "bird eggs",
	eatSomething: "This is a string",
	introduce: function introduction() {
		console.log('Hi, my name is' + ' ' + this.name + '. I am a' + ' ' + this.species + '. Today, I have eaten' + ' ' + this.foodsEaten + '.')
	}
}
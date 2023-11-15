let obj = {
	name: "Person name",
	age: 30,
	canDrive: true,

	setName: function(newName) {
		this.name = newName;
	},
};

console.log(obj);

// Access object property

console.log(obj.name);
console.log(obj.age);
console.log(obj.canDrive);
console.log(obj.setName);

// Change person name

obj.setName("Updated name");


// After
console.log(obj);


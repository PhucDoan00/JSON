var readlineSync = require('readline-sync');
var fs = require('fs');
var data = [];
while(true){
console.log("====Welcome to Students system====");
console.log("1. Show all students");
console.log("2. Create new student");
console.log("3. Save&Exit");

var choice = readlineSync.question('Enter your choice: ');


	if(choice == 1) {
		var studentString = fs.readFileSync('./data.json',{encoding:'utf8'});
		var studentObj = JSON.parse(studentString);
		data.push(studentObj);
		console.log(studentString);
	}

	if(choice == 2) {
		var students = {};
		var name = readlineSync.question('Enter student name: ');
		var age = readlineSync.question("Enter student age: ");
		var classes = readlineSync.question("Enter student class: ");
		students.name = name;
		students.age = parseInt(age);
		students.classes = classes;
		data.push(students);
	}
	if(choice == 3) {
		fs.writeFileSync('./data.json', JSON.stringify(data));
		break;
		}
	}




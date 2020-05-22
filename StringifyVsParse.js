
// Stringify chuyển object thành string, Parse ngược lại.
var mySelf = {name: 'Phuc', age: 19, gender: 'male'};
var mySelfString = JSON.stringify(mySelf);
console.log(mySelfString);


var myHobbyString = '{"nameHobby": "travel", "Duration": 1, "Place": "Sapa"}';
var myHobby = JSON.parse(myHobbyString);
console.log(myHobby);
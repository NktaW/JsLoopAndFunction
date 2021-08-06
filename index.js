//Simple FaceBook loggig app
let dataBase = [
	{
		username: "Jhon",
		password: "1234"
	},
	{
		username: "Liisa",
		password: "777"
	},
	{
		username: "Naomi",
		password: "yx0"
	},
	{
		username: "Kai",
		password: "daa"
	},
];





let newsFeed = [
	{
		username: "Lindalolxd",
		timeline: "JavaScript is cool!"
	},
	{
		username: "Mikko",
		timeline: "I love LIFE<3"
	}
];


function isUserValid(username, password){
	for(let i=0; i<dataBase.length; i++) {
		if(dataBase[i].username === username && dataBase[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password");
	}
}

let userNamePrompt = prompt("Whats your username?");
let passwordPrompt = prompt("Enter your password please");

signIn(userNamePrompt, passwordPrompt);
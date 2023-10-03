console.log("Random Question: Do you prefer coffee or tea?");

//Object literal
const myDog = {
  name: "Kallum",
  age: 3,
  breed: "Border Collie",
  temperament: "hyper",
};

document.getElementById("test1").innerHTML =
  myDog.name + " is my " + myDog.age + " year old " + myDog.breed;

//Object for...in loop
let txt = "";
for (let x in myDog) {
  txt += myDog[x] + " ";
}

document.getElementById("test1.2").innerHTML = txt;

//Object add properties
myDog.eyeColor = "hazel";

document.getElementById("test1.3").innerHTML =
  myDog.name + " has " + myDog.eyeColor + " eyes.";

// Object Method

//Array

//Array Method

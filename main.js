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

//Object delete properties
delete myDog.breed;

document.getElementById("test1.4").innerHTML =
  myDog.name + " is a " + myDog.breed;

// Object Method
const legendOfZelda = {
  releaseDate: "Februrary 21, 1986 (Japan)",
  publisher: "Nintendo",
  creator: "Shigeru Miyamoto",
  fullStatement: function () {
    return (
      this.creator +
      " released the first Legend of Zelda title on " +
      this.releaseDate +
      " with " +
      this.publisher
    );
  },
};

document.getElementById("test2").innerHTML = legendOfZelda.fullStatement();

//Object Constructors
function Child(first, age, eye) {
  this.firstName = first;
  this.age = age;
  this.eyeColor = eye;
}

const mySon = new Child("Levi", "6", "blue");
const myDaughter = new Child("Riley", "2", "blue");

document.getElementById("test2.2").innerHTML =
  "My son is " + mySon.age + ". My daughter is " + myDaughter.age + ".";

//Array
const justiceLeague = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "The Flash",
  "Green Lantern",
  "Aquaman",
  "Martian Manhunter",
  "Green Arrow",
  "Atom",
  "Hawkman",
  "Metamorpho",
  "Black Canary",
  "Phantom Stranger",
  "Elongated Man",
  "Red Tornado",
  "Hawkgirl",
  "Zatana",
  "Firestorm",
];

document.getElementById("test3").innerHTML =
  justiceLeague[1] + " is second in the array";

console.log(justiceLeague);

document.getElementById("test3.2").innerHTML = justiceLeague.toString();

// length of array sent to console log
let size = justiceLeague.length;
console.log(size);

//loop in the array
let text = "<ul>";
for (let i = 0; i < size; i++) {
  text += "<li>" + justiceLeague[i] + "</li>";
}
text += "</ul>";

document.getElementById("test3.3").innerHTML = text;

//Array Method

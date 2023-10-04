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

//Array

//Array Method

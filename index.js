

var numberOfButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  }
}

document.addEventListener("keydown", function(event) {

makeSound(event.key)

buttonAnimation(event.key)

}) // This is an anonymous function
// How do we add the event listener to the keyboard, we use document.addEventListener


function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:

  }
}

function buttonAnimation(currentKey) {
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed")

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100)

}

// Switch statement:
// Expression: Thing we are going to switch on (in this case we are going to switch the letter that is inside the
// Inner HTML of the buttons, so we will create  a variable that holds that value)

// Default is kinda like an "else" statement
// Most liely will never be triggered

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();


// "This" is the identity of the object that triggered the event listener

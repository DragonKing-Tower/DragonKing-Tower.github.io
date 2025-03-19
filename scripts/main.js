const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/troll2.png") {
    myImage.setAttribute("src", "images/poop1.jpg");
  } else {
    myImage.setAttribute("src", "images/troll2.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Who will be Eaten.");
  if (!myName) {
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Trolls will eat ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});

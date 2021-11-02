console.log("JS se provadi");

function myAlert() {
  alert("myAlert function");
}

//alert("global alert");

//myAlert();

// USKALI GENERICKYCH/OBECNYCH querySelectoru
var firstButton = document.querySelector("button");
firstButton.innerHTML = "Tlačítko 1";

document.getElementById("myH3ID").innerHTML =
  "Text byl upraven pomocí getElementById.";

// HROMADNA ZMENA TEXTU V HTML ELEMENTECH TRIDY myPClass
// KTERE JSOU OBALENY DIVem myDIV1
var myElementArray = document
  .getElementById("myDIV1")
  .querySelectorAll(".myPClass");

for (var i = 0; i < myElementArray.length; i++) {
  myElementArray[i].innerHTML = "Text i = " + i;
}

// HROMADNA ZMENA TLOUSTKY PISMA VE VSECH HTML ELEMENTECH TRIDY myPClass
var myAllPElementArray = document.getElementsByClassName("myPClass");
for (var j = 0; j < myAllPElementArray.length; j++) {
  myAllPElementArray[j].setAttribute("style", "font-weight: bold;");
}

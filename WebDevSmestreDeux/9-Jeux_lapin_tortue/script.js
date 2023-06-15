var stepTortue = 0;
var stepLapin = 0;

function lanceDe() {
  var avoirNumeroDe = Math.floor(Math.random() * 6) + 1;
  var imageDe = document.images[0];

  // changer image dé
  switch (avoirNumeroDe) {
    case 1:
      imageDe.src = "images/de_1.jpg";
      break;
    case 2:
      imageDe.src = "images/de_2.jpg";
      break;
    case 3:
      imageDe.src = "images/de_3.jpg";
      break;
    case 4:
      imageDe.src = "images/de_4.jpg";
      break;
    case 5:
      imageDe.src = "images/de_5.jpg";
      break;
    case 6:
      imageDe.src = "images/de_6.jpg";
      break;
  }
  // calculer les pas lapin et tortue
  if (avoirNumeroDe < 6) {
    stepTortue = stepTortue + 1;
  } else {
    stepLapin = 6;
  }
  // faire avancer la photo
  var tortue = document.getElementById("path-tortue").children[0];
  var lapin = document.getElementById("path-lapin").children[0];
  // avancer la tortue
  switch (stepTortue) {
    case 1:
      tortue.className = "";
      tortue.classList.add("step-one");
      break;
    case 2:
      tortue.className = "";
      tortue.classList.add("step-two");
      break;
    case 3:
      tortue.className = "";
      tortue.classList.add("step-three");
      break;
    case 4:
      tortue.className = "";
      tortue.classList.add("step-four");
      break;
    case 5:
      tortue.className = "";
      tortue.classList.add("step-five");
      break;
    case 6:
      tortue.className = "";
      tortue.classList.add("step-six");
      //cup winner
      var winCupC = document.createElement("div");
      var winCupI = document.createElement("img");
      winCupI.src = "images/cup.jpg";
      winCupC.appendChild(winCupI);
      document.getElementById("container-tortue").appendChild(winCupC);
      //diable dé
      imageDe.onclick = false;

      break;
    default:
      break;
  }
  //avancer lapin
  if (stepLapin == 6) {
    lapin.classList.add("step-six");
    imageDe.onclick = false;
    var winCupC = document.createElement("div");
    var winCupI = document.createElement("img");
    winCupI.src = "images/cup.jpg";
    winCupC.appendChild(winCupI);
    document.getElementById("container-lapin").appendChild(winCupC);
  }
}

function newGame(){
  location.reload();

}

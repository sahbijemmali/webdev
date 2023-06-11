// fonction retourner un  random nombre entre 0 et 9
function avoirNombre() {
  return Math.floor(Math.random() * 10);
}
// une liste qui contient les 4 nombres a chercher
let valeursRecherche = [];
for (let index = 0; index < 4; index++) {
  valeursRecherche[index] = avoirNombre();
}

// verifier les essais des utulisateurs
function verifier() {
  // avoir les essais de les utulisateurs et les cloner dans un nouveau div
  let proposition = document.querySelector(".proposition");
  //verifier  matching input 0
  if (proposition.children[0].value == valeursRecherche[0]) {
    proposition.children[0].style.backgroundColor = "green";
  } else if (
    proposition.children[0].value == valeursRecherche[1] ||
    proposition.children[0].value == valeursRecherche[2] ||
    proposition.children[0].value == valeursRecherche[3]
  ) {
    proposition.children[0].style.backgroundColor = "orange";
  } else {
    proposition.children[0].style.backgroundColor = "red";
  }
  //verifier  matching input 1
  if (proposition.children[1].value == valeursRecherche[1]) {
    proposition.children[1].style.backgroundColor = "green";
  } else if (
    proposition.children[1].value == valeursRecherche[0] ||
    proposition.children[1].value == valeursRecherche[2] ||
    proposition.children[1].value == valeursRecherche[3]
  ) {
    proposition.children[1].style.backgroundColor = "orange";
  } else {
    proposition.children[1].style.backgroundColor = "red";
  }
  //verifier  matching input 2
  if (proposition.children[2].value == valeursRecherche[2]) {
    proposition.children[2].style.backgroundColor = "green";
  } else if (
    proposition.children[2].value == valeursRecherche[0] ||
    proposition.children[2].value == valeursRecherche[1] ||
    proposition.children[2].value == valeursRecherche[3]
  ) {
    proposition.children[2].style.backgroundColor = "orange";
  } else {
    proposition.children[2].style.backgroundColor = "red";
  }
  //verifier  matching input 3
  if (proposition.children[3].value == valeursRecherche[3]) {
    proposition.children[3].style.backgroundColor = "green";
  } else if (
    proposition.children[3].value == valeursRecherche[0] ||
    proposition.children[3].value == valeursRecherche[1] ||
    proposition.children[3].value == valeursRecherche[2]
  ) {
    proposition.children[3].style.backgroundColor = "orange";
  } else {
    proposition.children[3].style.backgroundColor = "red";
  }

  //ajouter l'essai au div resultat
  let resulta = document.getElementById("resulta");
  resulta.appendChild(proposition.cloneNode(true));

  // bloquer les essais
  proposition.children[0].setAttribute("disabled", "");
  proposition.children[1].setAttribute("disabled", "");
  proposition.children[2].setAttribute("disabled", "");
  proposition.children[3].setAttribute("disabled", "");

  // finir le jeu lorsque la resultat est bonne
  if (
    proposition.children[0].value == valeursRecherche[0] &&
    proposition.children[1].value == valeursRecherche[1] &&
    proposition.children[2].value == valeursRecherche[2] &&
    proposition.children[3].value == valeursRecherche[3]
  ) {
    proposition.children[0].setAttribute("disabled", "");
    proposition.children[1].setAttribute("disabled", "");
    proposition.children[2].setAttribute("disabled", "");
    proposition.children[3].setAttribute("disabled", "");
    document.getElementById("btn-essai").setAttribute("disabled", "");
    document.getElementById("btn-verif").setAttribute("disabled", "");
    proposition.after("BINGO , BRAVO ! BRAVO ! BRAVO");
  }
}
//nouveau essai re-initialiser les inputs
function nouveauEssai() {
  let proposition = document.querySelector(".proposition");

  for (let index = 0; index < 4; index++) {
    proposition.children[index].removeAttribute("disabled");
    proposition.children[index].style.backgroundColor = "white";
    proposition.children[index].value = 0;
  }
}

function nouveauJeu() {
  location.reload();
}

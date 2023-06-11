/*
Exercice 1 : Tableaux en JS
0.Déclarer en JS un tableau nommé villes qui contient les éléments suivants :
"Tunis"    "Paris"    "Québec"    "NewYork"    "Tokyo"
1.Ecrire une fonction qui affiche tous les éléments du tableau et afficher tous les éléments du tableau
2.Afficher le premier élément du tableau
3.Afficher le nombre d’éléments du tableau
4.Ajouter à la fin du tableau les chaînes "Berlin" et "Rome" et afficher tous les éléments du tableau.
5.Supprimer le premier élément du tableau et afficher tous les éléments du tableau.
6.Ajouter deux éléments : "Istanbul " et "Madrid" de telle façon Istanbul devient le troisième élément dans le tableau et "Madrid" le  quatrième élément, puis afficher tous les éléments du tableau.
7.Supprimer trois éléments à partir de "Madrid" et afficher tous les éléments du tableau.
8.Trier le tableau et afficher tous les éléments du tableau.
*/

let villes = ["Tunis", "Paris", "Québec", "NewYork", "Tokyo"];

//creer fonction afficher une liste des villes
function AfficherVilles(villes) {
  let reponse = `\n`;
  for (let index = 0; index < villes.length; index++) {
    reponse = reponse + `  ${villes[index]}  `;
  }
  return reponse;
}
//creer le fichier HTML de base

let leTitre = document.createElement("h1");
leTitre.innerText = `Les Tableaus en Js `;
let Exercice = document.createElement("ol");
let questions = [
  "Tableau initial",
  "Première ville",
  "Nombres de ville",
  "Ajout de Berlin et Rome",
  "Suppression du premier élément",
  "Ajout de istanboul et Madrid",
  "Suppression de trois éléments à partir de Madrid",
  "Tableau trié",
];
for (let index = 0; index < 8; index++) {
  let questionBold = document.createElement("h2");
  let question = document.createElement("li");
  questionBold.appendChild(question);
  Exercice.appendChild(questionBold);
  question.innerText = `${questions[index]}`;
}
document.body.appendChild(leTitre);
document.body.appendChild(Exercice);

// reponse 1
reponseOne = document.createTextNode(AfficherVilles(villes));
document.getElementsByTagName("h2")[0].after(reponseOne);
//reponse 2
reponseTwo = document.createTextNode(villes[0]);
document.getElementsByTagName("h2")[1].after(reponseTwo);
//reponse 3
reponseThree = document.createTextNode(villes.length);
document.getElementsByTagName("h2")[2].after(reponseThree);
//reponse 4
villes.push("Berlin", "Rome");
document.getElementsByTagName("h2")[3].after(AfficherVilles(villes));
//reponse 5
villes.shift();
document.getElementsByTagName("h2")[4].after(AfficherVilles(villes));
//reponse 6
villes.splice(2, 0, "Istanbul");
villes.splice(3, 0, "Madrid");
document.getElementsByTagName("h2")[5].after(AfficherVilles(villes));
//reponse 7
villes.splice(3, 3);
document.getElementsByTagName("h2")[6].after(AfficherVilles(villes));
//reponse 8
villes.sort();
document.getElementsByTagName("h2")[7].after(AfficherVilles(villes));

/*
1.Ecrire le code JavaScript qui permet de modifier le lien vers http://www.isetso.rnu.tn
2.Ecrire le code JavaSript qui permet d’ajouter un attribut class à l’élément <a> et en lui donnant la valeur gras.
3.Ecrire le code JavaScript qui permet de mettre le contenu de <p id="connexion"> dans un élément <blockquote> (qui a un style particulier) en utilisant innerHTML.
*/
//1-modifier le lien vers http://www.isetso.rnu.tn
let lien = document.links[0];
lien.setAttribute("href", "http://www.isetso.rnu.tn");
//2- ajouter class et chnager texte en gras
lien.className = "lien";
let lienTwo = document.querySelector(".lien");
lienTwo.style.fontWeight = "bold";
//3- ajouter element  blockquote

let paragh = document.getElementById("connexion");
let newElement = document.createElement("blockquote");
newElement.innerHTML = paragh.innerHTML;
document.body.appendChild(newElement);
paragh.style.display = "none";

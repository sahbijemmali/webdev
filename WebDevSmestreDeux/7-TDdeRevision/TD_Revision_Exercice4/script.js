/*
Exercice 4 :
Ecrire le code JavaScript qui permet d’ajouter deux éléments à la liste :
✓ Un élément intitulé RSI juste AVANT l’élément DSI.
✓ Un élément intitulé SEM en dernière position.
*/
let liste = document.getElementById("liste");
let elementOne = document.createElement("li");
let ElementTwo = document.createElement("li");
elementOne.innerText = "RSI";
ElementTwo.innerText = "SEM";
liste.firstElementChild.after(elementOne);
liste.append(ElementTwo);

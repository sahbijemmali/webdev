function getNum() {
  input = document.getElementById("nbr-enfs").value;
  var formulaire = document.forms[0];

  // valider les entree
  if (input < 0) {
    //creer element message
    let message = document.createElement("p");
    message.id = "message";
    message.style.color = "red";
    message.innerText = "Nombre des enfants doit etre zero ou superieur";
    formulaire.appendChild(message);
    console.log(input);
    console.log(formulaire);
  } else {
    for (let index = 1; index <= input; index++) {
      let sousformDiv = document.createElement("div");
      let sousformLabel = document.createElement("label");
      let sousformInput = document.createElement("input");
      sousformInput.type = "text";
      sousformLabel.innerText = `Enfant ${index} : `;
      sousformDiv.appendChild(sousformLabel);
      sousformDiv.appendChild(sousformInput);
      formulaire.appendChild(sousformDiv);
    }
  }
}

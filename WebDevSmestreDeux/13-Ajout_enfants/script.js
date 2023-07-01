function ListerEnfants() {
  let kidsNumber = document.getElementById("kids-number").value;
  let lkidsNumber = kidsNumber.split("/");
  let girlNumber = parseInt(lkidsNumber[0]);
  let boyNumber = parseInt(lkidsNumber[1]);

  let filedKids = document.getElementById("liste-enfant");
  let listBoys = document.createElement("ul");
  let listGirls = document.createElement("ul");

  for (let index = 0; index < boyNumber; index++) {
    let elementBoy = document.createElement("li");
    let labelNom = document.createElement("label");
    let nom = document.createElement("input");
    listBoys.appendChild(elementBoy);
    filedKids.appendChild(listBoys);
    elementBoy.appendChild(labelNom);
    elementBoy.appendChild(nom);
    labelNom.innerText = `Garcon  ${index + 1} : `;
  }
  for (let index = 0; index < girlNumber; index++) {
    let elementGirl = document.createElement("li");
    let labelNomG = document.createElement("label");
    let nomG = document.createElement("input");
    listGirls.appendChild(elementGirl);
    filedKids.appendChild(listGirls);
    elementGirl.appendChild(labelNomG);
    elementGirl.appendChild(nomG);
    labelNomG.innerText = `Fille  ${index + 1} : `;
  }

  //   console.log(boyNumber);
}

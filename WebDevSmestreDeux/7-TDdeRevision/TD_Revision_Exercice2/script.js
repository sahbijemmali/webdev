/*
Ecrire le code JavaScript qui permet de générer un login quand le bouton Générer login est cliqué. Le login est généré de la façon suivante : on prend les deux premiers caractères du prénom concaténé aux deux premiers caractères du nom en majuscules concaténé à deux chiffres (entre 0 et 9) générés de façon aléatoires.
Le login généré est affiché dans une alerte
*/

function generer() {
  let prenom = document.getElementById("prenom").value;
  let nom = document.getElementById("nom").value;

  if ((prenom=="") || (nom=="") ) {
    alert(` Yezi ble bleda`);
  }else{
    let chiffreOne = Math.floor(Math.random() * 9 + 1);
    let chiffreTwo = Math.floor(Math.random() * 9 + 1);
    let login =`${prenom.substring(0, 2)}${nom.substring(0, 2).toUpperCase()}${chiffreOne}${chiffreTwo}`;
    alert(` le login générer est :  ${login}`);
  }
}


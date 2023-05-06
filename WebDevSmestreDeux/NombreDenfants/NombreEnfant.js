

function getNum(){
    input=document.getElementById("nbr-enfs").value;
    // valider les entree
    if (input<0) {
        document.getElementById("message").innerHTML="<span>Donner une valeur positif </span>"
        
    } else {
        let elemnt="<li> </li>".repeat(input);
        let listEnf = `<ol> ${elemnt} </ol>`;
        let Enfs=document.getElementById("enfs");
        Enfs.innerHTML=listEnf;
        document.getElementById("message").innerHTML=" "
        Enfs.onblur=function(){Enfs.contentEditable=false;} // verouillez la liste lors du sortir
    }   
    
}





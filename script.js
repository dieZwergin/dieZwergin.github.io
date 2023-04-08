function revealHint(hintID){
    var hint = document.getElementById(hintID);
    if (x.matches) { // If media query matches - window <= 992px
        if(hint.style.backgroundColor == "white"){
            hint.style.color = "black"
            hint.style.textShadow = "none";
            window.scrollTo(hint.offsetLeft, hint.offsetTop);   
        }else{
            hint.style.backgroundColor = "white";
        }
      } else {
        hint.style.color = "black";
        hint.style.textShadow = "none";
        window.scrollTo(hint.offsetLeft, hint.offsetTop);
      }
    
}

function changeTitle(){
    if(x.matches){
        document.getElementById("subCatchphrase").style.paddingBottom = "40px";
        document.getElementById("subCatchphrase").innerHTML = "Tippe auf die verdächtigen Stellen. <br>Hast du etwas entdeckt? Tippe erneut für mehr Informationen.";
    }else{
        console.log("not working");
    }

}


var x = window.matchMedia("(max-width: 992px)")

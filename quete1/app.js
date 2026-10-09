function opentab(x){
    let contents = document.querySelectorAll(".content") ;
    for(let i = 0; i <contents.length; i++){
        contents[i].style.display = "none" ;
    }
    contents[x].style.display = "block"
}

function P1() {
    const recherche = document.querySelector(".rechercheP1");
    const contents = document.querySelectorAll(".P1-content");

    const texte = recherche.value.toLowerCase();

    switch (texte) {
        case "livre":
            contents[0].style.display = "block";
            break;
        case "nouveau testament":
            contents[1].style.display = "block";
            break;
        case "apocalypse":
            contents[2].style.display = "block";
            break;
        case "16":
            contents[3].style.display = "block";
            break;
        case "harmaguédone":
            contents[4].style.display = "block";
            break;
    }
}


function P2() {
    const recherche = document.querySelector(".rechercheP2");
    const contents = document.querySelectorAll(".P2-content");

    const texte = recherche.value.toLowerCase();

    switch (texte) {
        case "soleil":
            contents[0].style.display = "block";
            break;
        case "saturne":
            contents[1].style.display = "block";
            break;
        case "vierge":
            contents[2].style.display = "block";
            break;
        case "richard feynman":
            contents[3].style.display = "block";
            break;
    }
}

function P3() {
    const recherche = document.querySelector(".rechercheP3");
    const contents = document.querySelectorAll(".P3-content");

    const texte = recherche.value.toLowerCase();

    switch (texte) {
        case "système ventriculaire":
            contents[0].style.display = "block";
            break;
        case "schizophrénie":
            contents[1].style.display = "block";
            break;
        case "adrénaline":
            contents[2].style.display = "block";
            break;
        case "viribus":
            contents[3].style.display = "block";
            break;
    }
}
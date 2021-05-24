loadLDocA("examen.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let animales = xmltree.querySelectorAll("animal")

    console.log(animales.length)
    for(let i=0; i<animales.length; i++){
        capa.innerHTML += "<p>" + animales[i].textContent + "</p>"
    }
}

addEventListener("mouseover", function(){
    alert("Cambio de estilo")
    let animales = xmltree.querySelectorAll("animal")
    for(let i=0; i<animales.length; i++){
        let res = i % 2
        if (res == 0){
            capa.innerHTML += "<p class='par'>" + animales[i].textContent + "</p>"
        } else {
            capa.innerHTML += "<p class='impar'>" + animales[i].textContent + "</p>"
        }
    }
})

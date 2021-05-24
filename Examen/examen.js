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
    for(let i=0; i<animales.length; i++){
        let res = i % 2
        if (res == 0){
            animales[i].className="par"
        } else {
            animales[i].className="impar"
        }
    }
})

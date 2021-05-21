loadLDocA("Ej2.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let mensajes = xmltree.querySelectorAll("mensaje")
    
    console.log(mensajes.length)
    for(let i=0; i<mensajes.length; i++){
        console.log("Entro al bucle")
        let res = i&2
        if(res==0){
            capa.innerHTML += "<p class='par'>" + mensajes[i].textContent + "</p>"
        } else {
            capa.innerHTML += "<p class='impar'>" + mensajes[i].textContent + "</p>"
        }
    } 
}

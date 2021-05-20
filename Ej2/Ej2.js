loadLDocA("Ej2.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let mensajes = xmltree.querySelector("mensaje")
    
    console.log(mensajes.length)
    for(let i=0; i<mensajes.length; i++){
        console.log("Entro al bucle")
        if(i == 2){
            capa.innerHTML += "<p class='par'>" + mensajes[i].textContent + "</p>"
            
        } else {
            capa.innerHTML += "<p>" + mensajes[i].textContent + "</p>"
        }
    } 
}

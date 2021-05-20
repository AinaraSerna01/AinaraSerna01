loadLDocA("Ej2.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let mensajes = xmltree.querySelectorAll("mensaje")
    for(let i=0; i<mensajes.length; i++){
        alert(capa[i].textContent)
    }
    
    console.log(mensajes.length)
    for(let i=0; i<mensajes.length; i++){
        console.log("Entro al bucle")
        if(i == 1 || i== 3 || i==5){
            capa.innerHTML += "<p class='impar'>" + mensajes[i].textContent + "</p>"
            
        } else {
            capa.innerHTML += "<p class='par'>" + mensajes[i].textContent + "</p>"
        }
    }
  
}

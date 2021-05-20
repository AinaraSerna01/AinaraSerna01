loadLDocA("libros.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let libros = xmltree.querySelectorAll("libro")
    
    console.log(libros.length)
    for(let i=0; i<libros.length; i++){
        console.log("Entro al bucle")
        //if(i == 2)
            //
        //else
      capa.innerHTML += capa.innerHTML + "<p>" + libros[i].textContent + "</p>"
        console.log(capa.innerHTML)
    }
  
}

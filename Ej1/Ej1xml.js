loadLDocA("libros.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    alert(capa)
    let libros = xmltree.querySelector("libro")
    for(let i=0; i<libros.length; i++){
        //if(i == 2)
            //
        //else
      capa.innerHTML += capa.innerHTML + "<p>" + libros[i].textContent + "</p>"
    }
  
}

loadLDocA("libros.xml","xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".árbolXML")
    let libros = xmltree.querySelector("libro")
    for(let i=0; i<libros.length; i++){
      capa.innerHTML += capa.innerHTML + "<p>" + libros[i].textContent + "</p>"
    }
    let libro3 = xmltree.querySelector("libro:nth-child(3)")
    alert(libro3)
    libro3.className="cambio"
}

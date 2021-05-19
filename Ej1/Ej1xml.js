
let capa = document.querySelector(".árbolXML")
let libros = xmltree.querySelector("libro")
for(let i=0; i<alumnos.length; i++){
    capa.innerHTML += capa.innerHTML + "<p>" + libros[i].textContent + "</p>"
}

let xmltree = loadLDocA("libros.xml","xml")
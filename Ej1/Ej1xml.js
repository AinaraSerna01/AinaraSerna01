
let xmltree = loadLDocA("libros.xml","xml")

let capa = document.querySelector(".árbolXML")
let libros = xmltree.querySelector("libro")
for(let i=0; i<alumnos.length; i++){
    capa.innerHTML += capa.innerHTML + "<p>" + libros[i].textContent + "</p>"
}

let libro3 = xmltree.querySelector("libro:nth-clild(3)")
alert("Cambio del 3º libro")
libro3[0].className="cambio"

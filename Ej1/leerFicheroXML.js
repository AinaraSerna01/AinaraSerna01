function gestionarFicheroXML(xmlDoc){
	alert("Cargar XML")
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++){
		capaVacia.innerHTML += "<p>" + libros[i].textContent + "</p>"
	}
	
}
loadDocA("libros.xml","xml") /*loadDocA --> para llamar un fichero y su tipo*/

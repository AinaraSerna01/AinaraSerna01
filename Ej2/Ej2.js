function gestionarTXT(txtlist){
    let lineas = txtlist.split("-")
    let item = document.querySelector(".listaTXT")
    for(let i of lineas){
        item.innerHTML += + "<p>" + i + "</p>"
    }
}

let txtlist = LoadLDocA("Ej2.txt", "txt")
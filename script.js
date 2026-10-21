var archivoBlob = null; 
 
document.getElementById("crearBlob").addEventListener("click", function() { 
    var texto = "Este es un archivo de prueba para el TP. Aca hay texto suficiente para poder probar la funcion de recortar."; 
    archivoBlob = new Blob([texto], { type: 'text/plain' }); 
    alert("¡Blob creado en la memoria!"); 
}); 
 
document.getElementById("descargarBlob").addEventListener("click", function() 
{ 
    if (!archivoBlob) { 
        alert("Primero tenés que crear el Blob."); 
        return; 
    } 
     
    var urlFantasma = URL.createObjectURL(archivoBlob); 
    var enlace = document.createElement("a"); 
    enlace.href = urlFantasma; 
    enlace.download = "archivo_original.txt"; 
     
    enlace.click(); 
     
    URL.revokeObjectURL(urlFantasma); 
}); 
 
document.getElementById("UsarSlice").addEventListener("click", function() { 
    if (!archivoBlob) { 
        alert("Primero tenés que crear el Blob."); 
        return; 
    } 
     
    var pedacitoBlob = archivoBlob.slice(0, 38, 'text/plain'); 
    var urlFantasma = URL.createObjectURL(pedacitoBlob); 
    var enlace = document.createElement("a"); 
    enlace.href = urlFantasma; 
    enlace.download = "archivo_recortado.txt"; 
     
    enlace.click(); 
     
    URL.revokeObjectURL(urlFantasma); 
}); 
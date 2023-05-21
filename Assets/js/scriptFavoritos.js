const renderIframe = () => {
    const reset = document.getElementsByClassName("iframeContainer")
    reset.remove();

    const iframe = document.createElement('div');
    iframe.className = "iframeContainer";
    
    const iframeUrl = document.createElement('iframe');
    iframeUrl.src = url;
    iframeContainer.appendChild(iframeUrl);

    body.appendChild(iframeContainer);
} 

const modalIframe = () => {
modal.style.display = "block";
}

const modalClose = (noModal) => {
if(noModal.target == modal){
    modal.style.display = "none";
}
}






const CargarPeliculas = async() => {
    const respuesta = await fetch ('https://akabab.github.io/starwars-api/api/all.json');
   console.log(respuesta);

   const peliculas = await respuesta.json();
   console.log(peliculas)
let peliculasas = ''; 
peliculas.forEach((pelicula) => {
  const imagenUrl = pelicula.image;
  const imagenCompletaUrl = `https://vignette.wikia.nocookie.net/starwars/images/${imagenUrl}`;
  const urlWiki = `https://starwars.fandom.com/wiki/${pelicula.name}`;
  peliculasas = peliculasas + `
  <link rel="stylesheet" href="/estilos.css">
  <div class="peli" id ="${urlWiki}">
      <img class="image" src="${imagenUrl}">
    </div>
    <h1 onclick="renderIframe(); modalIframe()">${pelicula.name}</h1>`; 
});
document.getElementById('contenedor').innerHTML = peliculasas;

}
CargarPeliculas(); 


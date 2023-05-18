//const renderIframe = () => {
//    const reset = document.getElementsByClassName("iframeContainer")
//    reset.remove();
//
  //  const iframe = document.createElement('div');
  //  iframe.className = "iframeContainer";
 //   
  //  const iframeUrl = document.createElement('iframe');
 //   iframeUrl.src = url;
   // iframeContainer.appendChild(iframeUrl);

  //  body.appendChild(iframeContainer);
//} 

//const modalIframe = () => {
//modal.style.display = "block";
//}//

//const modalClose = (noModal) => {
//if(noModal.target == modal){
//    modal.style.display = "none";
//}
//}



//peli.onclick = renderIframe;
//const modal = document.getElementsByClassName("iframeContainer");
//peli.onclick = modalIframe; 
//window.onclick = modalClose;


const CargarPeliculas = async() => {
    const respuesta = await fetch ('https://akabab.github.io/starwars-api/api/all.json');
   console.log(respuesta);

   const peliculas = await respuesta.json();
let peliculasas = ''; 
peliculas.forEach((pelicula) => {
  const imagenUrl = pelicula.poster;
  const imagenCompletaUrl = `https://vignette.wikia.nocookie.net/starwars/images/${imagenUrl}`;
  const urlWiki = `https://starwars.fandom.com/wiki/${pelicula.name}`;
  peliculasas = peliculasas + `
    <div class="peli" id ="${urlWiki}">
      <img class="poster" src="${imagenCompletaUrl}" >
    </div>
    <h1>${pelicula.name}</h1>`; 
});
document.getElementById('contenedor').innerHTML = peliculasas;

}
CargarPeliculas(); 


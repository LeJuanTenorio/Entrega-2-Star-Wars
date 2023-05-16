import { listaCarrusel } from "../js/turnToJson.js";
import { RenderCarrusel, inyectLowerContainer } from "../js/utils.js";


const lowerContainer = document.querySelector(".lowerContainer");



const myFetchCarrusel = (sum) => {
  for (let item of sum) {
    let imgObj = new RenderCarrusel(item.image);
    const imgRender = imgObj.render();
    carrusel.appendChild(imgRender);
  }
}

inyectLowerContainer();
const carrusel = document.querySelector(".carrusel");
myFetchCarrusel(listaCarrusel);
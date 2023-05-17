import { listaCarrusel } from "../js/turnToJson.js";
import { RenderCarrusel } from "../js/utils.js";


const lowerContainer = document.querySelector(".lowerContainer");



const myFetchCarrusel = async() => {

  const response = await fetch("")

  for (let item of sum) {
    let imgObj = new RenderCarrusel(item.image);
    const imgRender = imgObj.render();
    carrusel.appendChild(imgRender);
  }
}

const carrusel = document.querySelector(".carrusel");
myFetchCarrusel(listaCarrusel);
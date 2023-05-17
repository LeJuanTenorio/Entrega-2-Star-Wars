import { RenderCarrusel } from "../js/utils.js";


const lowerContainer = document.querySelector(".lowerContainer");
const carrusel = document.querySelector(".carrusel");


const myFetchCarrusel = async() => {

  const response = await fetch("");
  const data = await response.json();

  for (let item of sum) {
    let imgObj = new RenderCarrusel(item.image);
    const imgRender = imgObj.render();
    carrusel.appendChild(imgRender);
  }
}


myFetchCarrusel();
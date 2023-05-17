import { RenderCarrusel } from "../js/utils.js";


const lowerContainer = document.querySelector(".lowerContainer");
const carrusel = document.querySelector(".carrusel");


const myFetchCarrusel = async() => {

  const response = await fetch("https://raw.githubusercontent.com/LeJuanTenorio/Entrega-2-Star-Wars/main/Assets/json/jsonCarrusel.json");
  const data = await response.json();

  for (let item of data) {
    let imgObj = new RenderCarrusel(item.image);
    const imgRender = imgObj.render();
    carrusel.appendChild(imgRender);
  }
}


myFetchCarrusel();
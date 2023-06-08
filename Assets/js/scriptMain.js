import { RenderStarWars } from "../js/utils.js"
const contenedor = document.querySelector(".contenedor");

const myFetchStarWars = async() => {

  const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
  const data = await response.json();

  for (let item of data){
    let char = new RenderStarWars(item.image,item.name,item.id);
    const renderizado = char.render();
    contenedor.appendChild(renderizado);
    char.addClickListener();
    char.addRightClickListener;
  }
}

myFetchStarWars();


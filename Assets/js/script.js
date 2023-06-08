const lowerContainer = document.querySelector(".lowerContainer");
const carrusel = document.querySelector(".carrusel");

const myFetchCarrusel = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/LeJuanTenorio/Entrega-2-Star-Wars/main/Assets/json/jsonCarrusel.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch carousel data");
    }
    const data = await response.json();

    for (let item of data) {
      let imgObj = new RenderCarrusel(item.image);
      const imgRender = imgObj.render();
      carrusel.appendChild(imgRender);
    }
  } catch (error) {
    console.error(error);
  }
};

class RenderCarrusel {
  constructor(image) {
    this.image = image;
  }

  render() {
    const imgCarrusel = document.createElement("div");
    imgCarrusel.className = "imgCarrusel";

    const imgCarrus = document.createElement("img");
    imgCarrus.className = "image";
    imgCarrus.src = this.image;

    imgCarrusel.appendChild(imgCarrus);

    return imgCarrusel;
  }
}

myFetchCarrusel();
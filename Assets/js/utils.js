const lowerContainer = document.querySelector(".lowerContainer");


export class RenderCarrusel {
    image = "";
    
    constructor(image) {
        this.image = image;
    }

    render(){
        const imgCarrusel = document.createElement('div');
        imgCarrusel.className = "imgCarrusel"
        
        const imgCarrus = document.createElement('img');
        imgCarrus.className = "image"
        imgCarrus.src = this.image;

        imgCarrusel.appendChild(imgCarrus);

        return imgCarrusel;
    }     
}

export const inyectLowerContainer = () => {

    const glx = document.createElement('p');
    glx.className = "glx"
    glx.textContent = "EN UN GALAXIA MUY MUY LEJANA";
    lowerContainer.appendChild(glx);

    const introContainer = document.createElement('div');
    introContainer.className = "introContainer";
    lowerContainer.appendChild(introContainer);

    const introText = document.createElement('p');
    introText.className = "introText";
    introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Ut enim ad minim venia we in roma estuem domo"
    introContainer.appendChild(introText);

    const introImage = document.createElement('div');
    introImage.className = "introImage";
    introImage.src = "../Assets/images/duel.jpeg";
    introContainer.appendChild(introImage);

    const carrusel = document.createElement('div');
    carrusel.className = "carrusel";
    lowerContainer.appendChild(carrusel);
    
   const picContainer1 = document.createElement('div');
   picContainer1.className = "picContainer1";
   lowerContainer.appendChild(picContainer1);

   const picText = document.createElement('p');
   picText.className = "picText";
   introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Ut enim ad minim venia we in roma estuem domo";
   picContainer1.appendChild(picText);

   const picImage = document.createElement('div');
   picImage.className = "picImage";
   picContainer1.appendChild(picImage);

   const picContainer12 = document.createElement('div');
   picContainer12.className = "picContainer1";
   lowerContainer.appendChild(picContainer1);

   const picImage2 = document.createElement('div');
   picImage2.className = "picImage";
   picContainer1.appendChild(picImage);

   const picText2 = document.createElement('p');
   picText2.className = "picText";
   introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu Ut enim ad minim venia we in roma estuem domo";
   picContainer1.appendChild(picText);
}
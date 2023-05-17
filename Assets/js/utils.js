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

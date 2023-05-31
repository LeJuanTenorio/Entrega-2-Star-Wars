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

export class RenderStarWars{
    image = "";
    name = "";
    
    constructor(image, name) {
        this.image = image;
        this.name = name;
    }

    render(){
        const starContainer = document.createElement('div');
        starContainer.className = "starContainer"
        
        const imgStar = document.createElement('img');
        imgStar.className = "imageStar"
        imgStar.src = this.image;

        const name = document.createElement('p')
        name.className = "name"
        name.textContent = this.name;

        starContainer.appendChild(imgStar);
        starContainer.appendChild(name);

        return starContainer;
    }     
}


const TIENDA = "tienda";

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

const PERSONAS = "personas";
const USUARIO = "usuario";

export class RenderStarWars{
    image = "";
    name = "";
    #id = "";
    
    constructor(image, name, id) {
        this.image = image;
        this.name = name;
        this.#id = id;
    }

    render(){
        const starContainer = document.createElement('div');
        starContainer.className = "starContainer"
        
        const imgStar = document.createElement('img');
        imgStar.className = "imageStar"
        imgStar.src = this.image;
        imgStar.id = this.#obtenerId();

        const name = document.createElement('p')
        name.className = "name"
        name.textContent = this.name;

        starContainer.appendChild(imgStar);
        starContainer.appendChild(name);

        return starContainer;
    }     

    addClickListener() {
        const id = this.#obtenerId();
        const image = document.querySelector("#" + id);
        image.addEventListener("click", async () => {
            agregarAFavoritos(this.#id);
            console.log("mamaguevazo")
        })
    }

    #obtenerId() {
        return "image-" + this.#id;
    }
}

const existeFavorito = (ids, id) => {
    for (const idFavorito of ids) {
        if (idFavorito === id) {
            return true;
        }
    }

    return false;
}

const agregarAFavoritos = (id) => {
    const correo = localStorage.getItem(USUARIO);
    const usuarios = localStorage.getItem(PERSONAS);

    if (correo !== null && usuarios !== null) {
        const usuariosJSON = JSON.parse(usuarios);
        
        for (const persona of usuariosJSON) {
            if (persona.correo === correo) {
                if (existeFavorito(persona.favoritos, id) === false) {
                    persona.favoritos.push(id);
                }
            }
        }

        localStorage.setItem(PERSONAS, JSON.stringify(usuariosJSON));
    }
}

export const cargarFavoritos = async () => {
    const divFavoritos = document.querySelector(".container");
    divFavoritos.innerHTML = "";

    const favoritosIds = obtenerFavoritos();

    const tienda = await cargarTienda();

    for (const producto of tienda) {
        if(favoritosIds.includes(producto.id)) {
            const image = document.createElement("img");
            image.src = producto.image;
            image.classList.add("image");
            divFavoritos.appendChild(image);

            image.addEventListener("click", () => {
                eliminarFavorito(producto.id);
                cargarFavoritos();
            })
        }
    }
}

export const obtenerFavoritos = () => {
    const correo = localStorage.getItem(USUARIO);
    const usuarios = localStorage.getItem(PERSONAS);

    if (correo !== null && usuarios !== null) {
        const usuariosJSON = JSON.parse(usuarios);
        
        for (const persona of usuariosJSON) {
            if (persona.correo === correo) {
                return persona.favoritos;
            }
        }
    }

    return [];
}

const cargarTienda = async () => {
    const tienda = localStorage.getItem(TIENDA);

    if (tienda === null) {
        const request = await fetch("https://akabab.github.io/starwars-api/api/all.json");
        const data = await request.json();

        localStorage.setItem(TIENDA, JSON.stringify(data));
        return data;
    }

    return JSON.parse(tienda);
}
const PERSONAS = "personas";
const USUARIO = "usuario";

const render = async () => {

    const formulario = document.querySelector(".form1");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = event.target.correo.value;
        const contrasena = event.target.contrasena.value;

        registrarPersona(correo, contrasena);
    })

}

const registrarPersona = (correoPersona, contrasenaPersona) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas === null) {
        const persona = {
            correo: correoPersona,
            contrasena: contrasenaPersona,
            favoritos: []
        }

        const personasArray = [persona];

        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    } else {
        const personasArray = JSON.parse(personas);

        const persona = {
            correo: correoPersona,
            contrasena: contrasenaPersona,
            favoritos: []
        }

        personasArray.push(persona);
        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    }
}

window.onload = render;
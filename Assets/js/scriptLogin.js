const PERSONAS = "personas";
const USUARIO = "usuario";


const usuarioExiste = (correoUsuario, contrasenaUsuario) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas !== null) {
        const personasArray = JSON.parse(personas);

        for (const persona of personasArray) {
            if (correoUsuario === persona.correo && contrasenaUsuario === persona.contrasena) {
                return true;
            }
        }
    }

    return false;
}

const render = async () => {
    const formulario = document.querySelector(".form1");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = event.target.username.value;
        const contrasena = event.target.password.value;

        validarUsuario(correo, contrasena);
    })

    const botonRegistro = document.querySelector("#boton-registro");
    botonRegistro.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "/assets/html/indexSignUp.html"
        console.log("mamaguevo")
    })
}

const validarUsuario = (correoUsuario, contrasenaUsuario) => {
    if(usuarioExiste(correoUsuario, contrasenaUsuario) === true) {
        localStorage.setItem(USUARIO, correoUsuario);
        window.location.href = "/assets/html/indexMain.html";
    } else {
        alert("El usuario no existe");
    }
}

window.onload = render;
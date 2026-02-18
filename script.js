
const formulario = document.querySelector('#form-contacto');
const btnLimpiar = document.querySelector('#btn-limpiar');

alert("JS cargado correctamente");

formulario.addEventListener("submit", function(e) {

    e.preventDefault()//evita q se envie solo

    const email = document.querySelector('#email').value.trim();//obtenemos el valor. trim elimina los espacios innecesarios 

    if(email === "" ) {
        alert("Por favor completá todos los campos");
    return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Ingresá un correo electrónico válido");
        return;
    }

    alert("Mensaje enviado correctamente ✅");

    //si todo esta bien se limpia el formulario
    formulario.reset();
});


btnLimpiar.addEventListener("click", function(e) {
    formulario.reset()
});

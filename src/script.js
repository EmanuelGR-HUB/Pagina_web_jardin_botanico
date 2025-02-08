// Cambiar el texto del título al hacer clic
const titulo = document.querySelector('h1');
titulo.addEventListener('click', () => {
    titulo.textContent = '¡Has hecho clic!';
});
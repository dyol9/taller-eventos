document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greenButton');
    button.addEventListener('click', () => {
        alert('Hola!');
    });
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.addEventListener('click', () => {
            alert('Hola! Soy el div');
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const lightImage = document.getElementById('light');
    const darkImage = document.getElementById('dark');

    themeToggleButton.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');

        const moonIcon = document.getElementById('moon');
        const sunIcon = document.getElementById('sun');


        if (bodyElement.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            darkImage.style.display = 'block';
            lightImage.style.display = 'none';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            lightImage.style.display = 'block';
            darkImage.style.display = 'none';
        }
    });

    if (bodyElement.classList.contains('dark-mode')) {
        darkImage.style.display = 'block';
        lightImage.style.display = 'none';
    } else {
        lightImage.style.display = 'block';
        darkImage.style.display = 'none';
    }
});

const popup = document.getElementById("popup");

function closePopup() {
    popup.remove();
}
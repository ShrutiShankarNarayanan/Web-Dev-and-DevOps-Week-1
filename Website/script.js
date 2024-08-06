function toggleMode() {
  const body = document.body;
  const toggleButton = document.getElementById('toggleButton');

  if (toggleButton) { // Check if the button exists
    const themeIcon = toggleButton.querySelector('img');

    body.classList.toggle('dark-mode');
    body.classList.remove('light-mode');

    if (themeIcon) { // Check if the image element exists
      if (body.classList.contains('dark-mode')) {
        themeIcon.src = "https://code.visualstudio.com/assets/icons/theme-dark.svg";
      } else {
        themeIcon.src = "https://code.visualstudio.com/assets/icons/theme-light.svg";
      }
    }
  }
}

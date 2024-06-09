const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const floatingWindow = document.getElementById('floatingWindow');

openButton.addEventListener('click', () => {
    // popup.style.display = 'block';
    floatingWindow.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    // popup.style.display = 'none';
    floatingWindow.style.display = 'none';
});

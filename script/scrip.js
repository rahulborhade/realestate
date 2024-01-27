// < !--Add this script at the end of your body tag-- >

const navLinksContainer = document.querySelector('.nav-links-container');
const toggleButton = document.querySelector('.get-brochure');

toggleButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show-links');
});

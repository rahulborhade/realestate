// < !--Add this script at the end of your body tag-- >

const navLinksContainer = document.querySelector('.nav-links-container');
const toggleButton = document.querySelector('.get-brochure');

toggleButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show-links');
});


// carousel
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000 // Set the interval to 3 seconds
    });
});


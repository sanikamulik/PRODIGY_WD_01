// Get references to the hamburger button and the navigation list
const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('.navbar .list');

// Add an event listener to the hamburger button
hamburgerBtn.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation list
    navList.classList.toggle('show');
});

// CSS rule for the 'show' class in the media query
// Add the following to your CSS file
/*
@media (max-width: 768px) {
    .navbar .list.show {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
*/

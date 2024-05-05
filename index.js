
const hamburgerBtn = document.getElementById('hamburger-btn');
const navList = document.querySelector('.navbar .list');


hamburgerBtn.addEventListener('click', () => {
    
    navList.classList.toggle('show');
});



const navItem = document.querySelectorAll('.navLink');
navItem.forEach(navItem =>{
    navItem.addEventListener('click',  () => {
        document.querySelector('.active').classList.remove('active');
        navItem.classList.add('active');
    });
});
const   navSlide = ()=>{
    const burger = document.querySelector('.menu-burger');
    const  nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', ()=>{
        // This toggles nav from out of the frame
        nav.classList.toggle('nav-active');

        // This bit here animates each one of the anchors
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            }
            else {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.8}s`;
            }
        });
        // Burger to cross animation
        burger.classList.toggle('toggle');
    });
}

navSlide();
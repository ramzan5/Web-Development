const navSlide =()=>{
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    bar.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
        });
        bar.classList.toggle('toggle');
    
    });

    

}
navSlide();
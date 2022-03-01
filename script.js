const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");


hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});

let menuOpen = false;
hamburger.addEventListener('click',()=>{
    if (!menuOpen) {
        hamburger.classList.add('open');
        menuOpen = true;
        
    }else{
        hamburger.classList.remove('open');
        menuOpen = false;
    }
});

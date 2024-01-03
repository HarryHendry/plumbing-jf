const Hamburger = document.querySelector(".hamburger");
Hamburger.onclick = function() {
    const Navbar = document.querySelector(".navbar");
    Navbar.classList.toggle("active");
}
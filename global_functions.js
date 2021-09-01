// Toggle hamburger menu
function openMobileNav(button) {
    document.getElementById("mobile-nav-container").style.transition = "all 0.3s";
    button.classList.toggle("menu-open");
    document.getElementById("mobile-nav-container").classList.toggle("expand-menu");
}
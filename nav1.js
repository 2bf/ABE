function toggleMenu() {
    var navbarLinks = document.getElementById('navbar-links');
    if (navbarLinks.classList.contains('expanded')) {
        navbarLinks.classList.remove('expanded');
    } else {
        navbarLinks.classList.add('expanded');
    }
}

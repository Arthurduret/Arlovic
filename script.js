
document.querySelectorAll('.m-hover').forEach(element => {
    element.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        if (link) window.location.href = link;
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-panoramique');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const stickyNav = document.getElementById('stickyNav');
    
    // Si on dépasse 200px de scroll, on affiche le menu
    if (window.scrollY > 200) {
        stickyNav.classList.add('visible');
    } else {
        stickyNav.classList.remove('visible');
    }
});

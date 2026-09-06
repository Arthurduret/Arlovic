document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('is-active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('is-active');
            });
        });
    }
});

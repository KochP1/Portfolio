document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelectorAll(".theme-icon");

    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.forEach(element => {
        element.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    })

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeToggle.forEach(element => {
            const icon = element.querySelector('i');
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        })

        const nav = document.querySelectorAll(".nav");
        nav.forEach(nav => nav.classList.add("dark-mode"));

        const infoContainer = document.querySelectorAll('.personal-info__container');
        infoContainer.forEach(container => container.classList.add('dark-mode'));

        const sectionContainer = document.querySelectorAll('.section__container');
        sectionContainer.forEach(container => container.classList.add('dark-mode'));

        const techLogo = document.querySelectorAll('.tech-icon ');
        techLogo.forEach(logo => logo.classList.add('dark-mode'));

        const cardProyect = document.querySelectorAll('.card-proyect');
        cardProyect.forEach(card => card.classList.add('dark-mode'));

        const cardServicio = document.querySelectorAll('.servicio-card');
        cardServicio.forEach(card => card.classList.add('dark-mode'));

        const form = document.querySelectorAll('.form-contact');
        form.forEach(form => form.classList.add('dark-mode'));

        const testimonioCard = document.querySelectorAll('.testimonio-card ');
        testimonioCard.forEach(card => card.classList.add('dark-mode'));
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeToggle.forEach(element => {
            const icon = element.querySelector('i');
            icon.classList.add("fa-moon");
            icon.classList.remove("fa-sun");
        })

        const nav = document.querySelectorAll(".nav");
        nav.forEach(nav => nav.classList.remove("dark-mode"));

        const infoContainer = document.querySelectorAll('.personal-info__container');
        infoContainer.forEach(container => container.classList.remove('dark-mode'));

        const sectionContainer = document.querySelectorAll('.section__container');
        sectionContainer.forEach(container => container.classList.remove('dark-mode'));

        const techLogo = document.querySelectorAll('.tech-icon ');
        techLogo.forEach(logo => logo.classList.remove('dark-mode'));

        const cardProyect = document.querySelectorAll('.card-proyect');
        cardProyect.forEach(card => card.classList.remove('dark-mode'));

        const cardServicio = document.querySelectorAll('.servicio-card');
        cardServicio.forEach(card => card.classList.remove('dark-mode'));

        const form = document.querySelectorAll('.form-contact');
        form.forEach(form => form.classList.remove('dark-mode'));

        const testimonioCard = document.querySelectorAll('.testimonio-card ');
        testimonioCard.forEach(card => card.classList.remove('dark-mode'));

    }
});

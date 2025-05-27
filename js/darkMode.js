document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        const nav = document.querySelectorAll(".nav");
        nav.forEach(nav => nav.classList.add("dark-mode"));

        const infoContainer = document.querySelectorAll('.personal-info__container');
        infoContainer.forEach(container => container.classList.add('dark-mode'));

        const sectionContainer = document.querySelectorAll('.section__container');
        sectionContainer.forEach(container => container.classList.add('dark-mode'));
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        const nav = document.querySelectorAll(".nav");
        nav.forEach(nav => nav.classList.remove("dark-mode"));

        const infoContainer = document.querySelectorAll('.personal-info__container');
        infoContainer.forEach(container => container.classList.remove('dark-mode'));

        const sectionContainer = document.querySelectorAll('.section__container');
        sectionContainer.forEach(container => container.classList.remove('dark-mode'));

    }
});

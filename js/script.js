document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form-contact');
    const sidebarIcon = document.getElementById('sidebar-btn');
    const closeSideBarIcon = document.getElementById('sidebar-close-btn');

    sidebarIcon.addEventListener('click', () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
    })

    closeSideBarIcon.addEventListener('click', () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })
})
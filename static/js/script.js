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

    /*form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (email.length > 50) {
            console.log('El email puede tener un máximo de 50 caracteres')
            return;
        }

        if (asunto.length > 70) {
            console.log('El asunto puede tener un máximo de 70 caracteres')
            return;
        }

        if (mensaje.length > 50) {
            console.log('El mensaje puede tener un máximo de 1000 caracteres')
            return;
        }

        console.log(email);
        console.log(asunto);
        console.log(mensaje);
    })*/
})
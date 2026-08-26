const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (menu && sidebar) {

    menu.addEventListener("click", () => {

        const open = sidebar.classList.toggle("open");

        menu.classList.toggle("open", open);

        menu.setAttribute("aria-expanded", open);

        document.body.classList.toggle("menu-open", open);

    });


    sidebar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            sidebar.classList.remove("open");

            menu.classList.remove("open");

            menu.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

        });

    });

}
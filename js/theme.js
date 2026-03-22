const toggle = document.getElementById("theme-toggle");

cargarTema();

updateTooltip();

toggle.addEventListener("change", cambiarTema);



function cargarTema() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }
}

function cambiarTema() {
    const isDark = toggle.checked;

    document.body.classList.toggle("dark", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateTooltip();
}

function updateTooltip() {
    if (toggle.checked) {
        toggle.title = "Modo claro ☀️";
    } else {
        toggle.title = "Modo oscuro 🌙";
    }
}
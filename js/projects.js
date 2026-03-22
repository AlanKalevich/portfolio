const container = document.getElementById("projects-container")

const proyectos = fetch("texts/proyectos.json").then(procesarRespuesta).then(mostrarProyectos);

function procesarRespuesta(response) {
    return response.json();
}

function mostrarProyectos(proyectos) {
    console.log(proyectos);

    const template = document.getElementById("project-template");

    for (const proyecto of proyectos) {

        const clone = template.content.cloneNode(true);

        clone.querySelector(".project-title").textContent = proyecto.titulo;
        clone.querySelector(".project-description").textContent = proyecto.descripcion;

        const imageDiv = clone.querySelector(".project-image");

        if (proyecto.imagen)
            imageDiv.style.backgroundImage = `url(${proyecto.imagen})`;
        else
            imageDiv.style.backgroundImage = "linear-gradient(135deg, #006bf7, #cef4fd)";


        imageDiv.style.backgroundSize = "cover";
        imageDiv.style.backgroundPosition = "center";

        container.appendChild(clone);

    }
}
function mostrarAlerta() {
    alert("Não tem saiba mais, é só pra mostrar que sei fazer");
}

function ocultarElementos() {
    const elementos = document.querySelectorAll(".section ul");
    elementos.forEach(element => {
        element.classList.add("hidden");
    });
}

function mostrarElementos() {
    const elementos = document.querySelectorAll(".section ul");
    elementos.forEach(element => {
        element.classList.remove("hidden");
    });
}

function criarElemento() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Mesma coisa do saiba mais";
    document.querySelector("#artistas-lista").appendChild(novoParagrafo);
}

function modificarEstilo() {
    document.body.style.backgroundColor = "#e0f7fa";
}

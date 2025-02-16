document.querySelector(".botao-compra").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

document.querySelector(".botao-compra").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
let arrayHistorial = []

class Rectangulo {
    constructor(tipo, alto, ancho) {
        this.tipo = tipo;
        this.alto = alto;
        this.ancho = ancho;
    }

    calcularPerimetro() {
        return (this.alto * 2) + (this.ancho * 2);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}

const submitRectangulo = document.getElementById("inputRectangulo");

submitRectangulo.addEventListener("submit", (e) => {
    e.preventDefault();
    tipo = "rectangulo";
    alto = document.getElementById("alto").value;
    ancho = document.getElementById("ancho").value;

    rectanguloActivo = new Rectangulo(tipo, alto, ancho);
    document.getElementById("displayResultado").innerHTML= `<p>Perímetro: ${rectanguloActivo.calcularPerimetro()}. Area: ${rectanguloActivo.calcularArea()}.</p>`;
    arrayHistorial.push(rectanguloActivo);
})

console.log(arrayHistorial)
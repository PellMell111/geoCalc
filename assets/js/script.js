class Rectangulo {
    constructor(alto, ancho) {
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

const submitRectangulo = document.getElementById("submitRectangulo");

submitRectangulo.onsubmit = () => {
    alto = document.getElementById("alto");
    ancho = document.getElementById("ancho");

    rectanguloActivo = new Rectangulo(alto, ancho);
    document.getElementById("displayResultado").innerHTML= `<p>Perímetro: ${rectanguloActivo.calcularPerimetro}. Area: ${rectanguloActivo.calcularArea}.</p>`;
}
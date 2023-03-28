let arrayHistorial = JSON.parse(localStorage.getItem('storageHistorial')) || [];

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

const botonRectangulo = document.getElementById("seleccionRectangulo");
botonRectangulo.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("seleccionFigura").innerHTML = `
    <form id="inputRectangulo">
        <label for="alto">Alto:</label><input id="alto" type="number" name="alto">
        <label for="ancho">Ancho:</label><input id="ancho" type="number" name="ancho">
        <button type="submit" id="submitRectangulo">Calcular</button>
    </form>`;

    const submitRectangulo = document.getElementById("inputRectangulo");

    submitRectangulo.addEventListener("submit", (e) => {
        e.preventDefault();
        tipo = "rectangulo";
        alto = document.getElementById("alto").value;
        ancho = document.getElementById("ancho").value;

        rectanguloActivo = new Rectangulo(tipo, alto, ancho);
        document.getElementById("displayResultado").innerHTML = `<p>Perímetro: ${rectanguloActivo.calcularPerimetro()}. Area: ${rectanguloActivo.calcularArea()}.</p>`;
        arrayHistorial.push(rectanguloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

class Circulo {
    constructor(tipo, radio) {
        this.tipo = tipo;
        this.radio = radio;
    }

    calcularPerimetro() {
        return this.radio * Math.PI * 2;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

const botonCirculo = document.getElementById("seleccionCirculo");
botonCirculo.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("seleccionFigura").innerHTML = `
    <form id="inputCirculo">
        <label for="radio">Radio:</label><input id="radio" type="number" name="radio">
        <button type="submit" id="submitCirculo">Calcular</button>
    </form>`;

    const submitCirculo = document.getElementById("inputCirculo");

    submitCirculo.addEventListener("submit", (e) => {
        e.preventDefault();
        tipo = "circulo";
        radio = document.getElementById("radio").value;

        circuloActivo = new Circulo(tipo, radio);
        document.getElementById("displayResultado").innerHTML = `<p>Perímetro: ${circuloActivo.calcularPerimetro()}. Area: ${circuloActivo.calcularArea()}.</p>`;
        arrayHistorial.push(rectanguloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

console.log(arrayHistorial)
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

        rectanguloActivo.perimetro = rectanguloActivo.calcularPerimetro();
        rectanguloActivo.area = rectanguloActivo.calcularArea();

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

        circuloActivo.perimetro = circuloActivo.calcularPerimetro();
        circuloActivo.area = circuloActivo.calcularArea();

        document.getElementById("displayResultado").innerHTML = `<p>Perímetro: ${circuloActivo.calcularPerimetro()}. Area: ${circuloActivo.calcularArea()}.</p>`;

        arrayHistorial.push(circuloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

class Triangulo {
    constructor(tipo, altura, base) {
        this.tipo = tipo;
        this.altura = altura;
        this.base = base;
    }

    calcularArea() {
        return (this.altura * this.base) / 2;
    }
}

const botonTriangulo = document.getElementById("seleccionTriangulo");

botonTriangulo.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("seleccionFigura").innerHTML = `
        <form id="inputTriangulo">
            <label for="altura">Altura:</label><input id="altura" type="number" name="altura">
            <label for="base">Base:</label><input id="base" type="number" name="base">
            <button type="submit" id="submitTriangulo">Calcular</button>
        </form>`
    
    const submitTriangulo = document.getElementById("inputTriangulo");

    submitTriangulo.addEventListener("submit", (e) => {
        e.preventDefault();
        tipo = "triangulo";
        altura = document.getElementById("altura").value;
        base = document.getElementById("base").value;

        trianguloActivo = new Triangulo(tipo, altura, base);

        trianguloActivo.area = trianguloActivo.calcularArea();

        document.getElementById("displayResultado").innerHTML = `Area: ${trianguloActivo.calcularArea()}.</p>`;

        //Aquí es donde se cargan los triangulos generados por el usuario.
        arrayHistorial.push(trianguloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

//Intento de visualizar en el documento los objetos del arrayHistorial.

const documentoHistorial = document.getElementById("displayHistorial");
arrayHistorial.forEach(element => {
    const div = document.createElement('div');
    if (element.tipo = "rectangulo") {
        div.innerHTML = `<p>Rectangulo (Alto: ${element.alto} / Ancho: ${element.ancho}) Perímetro: ${element.perimetro}. Area: ${element.area}.</p>`;
    } else if (element.tipo = "circulo") {
        div.innerHTML = `Círculo (Radio: ${element.radio}) Perímetro: ${element.perimetro}. Area: ${element.area}.`;
    } else if (element.tipo = "triangulo") {
        div.innerHTML = `Triángulo (Altura: ${element.altura}. Base ${element.base}) Area: ${element.area}.`;
    }
    documentoHistorial.appendChild(div);
});
//Array que guarda los objetos generados por el usuario al realizar operaciones.
let arrayHistorial = JSON.parse(localStorage.getItem('storageHistorial')) || [];

//Clase con la función constructora y los calculos correspondientes a un rectángulo.
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

//Evento que se activa cuando el usuario selecciona el botón Rectángulo.
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

    //Función que se activa cuando el usuario genera un calculo para un rectángulo.
    submitRectangulo.addEventListener("submit", (e) => {
        e.preventDefault();
        tipo = "rectangulo";
        alto = document.getElementById("alto").value;
        ancho = document.getElementById("ancho").value;

        //Se genera un nuevo objeto.
        rectanguloActivo = new Rectangulo(tipo, alto, ancho);

        //Se agregan "perimetro" y "area" como propiedades del objeto con sus valores correspondientes.
        rectanguloActivo.perimetro = rectanguloActivo.calcularPerimetro();
        rectanguloActivo.area = rectanguloActivo.calcularArea();

        //Se renderiza el resultado de la operación.
        document.getElementById("displayResultado").innerHTML = `<p>Perímetro: ${rectanguloActivo.calcularPerimetro()}. Area: ${rectanguloActivo.calcularArea()}.</p>`;

        //Se agrega el nuevo objeto al arrayHistorial y se guarda en el localStorage.
        arrayHistorial.push(rectanguloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

//Clase con la función constructora y los calculos correspondientes a un círculo.
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

//Evento que se activa cuando el usuario selecciona el botón Círculo.
const botonCirculo = document.getElementById("seleccionCirculo");
botonCirculo.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("seleccionFigura").innerHTML = `
        <form id="inputCirculo">
            <label for="radio">Radio:</label><input id="radio" type="number" name="radio">
            <button type="submit" id="submitCirculo">Calcular</button>
        </form>`;

    const submitCirculo = document.getElementById("inputCirculo");

    //Función que se activa cuando el usuario genera un calculo para un círculo.
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

//Clase con la función constructora y los calculos correspondientes a un triángulo. Solo calcula area porque el proceso para calcular el perimetro de un triángulo es diametralmente distinto.
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

//Evento que se activa cuando el usuario selecciona el botón Triángulo.
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

    //Función que se activa cuando el usuario genera un calculo para un triángulo.
    submitTriangulo.addEventListener("submit", (e) => {
        e.preventDefault();
        tipo = "triangulo";
        altura = document.getElementById("altura").value;
        base = document.getElementById("base").value;

        trianguloActivo = new Triangulo(tipo, altura, base);

        trianguloActivo.area = trianguloActivo.calcularArea();

        document.getElementById("displayResultado").innerHTML = `Area: ${trianguloActivo.calcularArea()}.</p>`;

        arrayHistorial.push(trianguloActivo);
        localStorage.setItem('storageHistorial', JSON.stringify(arrayHistorial));
    })
})

//Declaraciones que renderizan el contenido del arrayHistorial.
const documentoHistorial = document.getElementById("displayHistorial");

//Declaración de la función que identifica el tipo de figura cuyos valores se están intentando renderizar y genera el <div> con el formato correspondiente a dicha figura.
const generarDiv = (element, documentoHistorial) => {
    const div = document.createElement('div');
    div.innerHTML =
        element.tipo == "rectangulo" ?
        `<p>Rectangulo (Alto: ${element.alto} / Ancho: ${element.ancho}) Perímetro: ${element.perimetro}. Area: ${element.area}.</p>`:
        element.tipo == "circulo" ?
        `Círculo (Radio: ${element.radio}) Perímetro: ${element.perimetro}. Area: ${element.area}.`:
        element.tipo == "triangulo" ?
        `Triángulo (Altura: ${element.altura} / Base ${element.base}) Area: ${element.area}.`: '';
    documentoHistorial.appendChild(div);
    return div;
}

//Función que recorre el array y renderiza la información de los objetos guardados en el localStorage.
arrayHistorial.forEach(element => {
    generarDiv(element, documentoHistorial);
});

//Función que renderiza el último objeto añadido al array cada vez que el usuario hace un submit y agrega un objeto al arrayHistorial.
document.addEventListener("submit", (e) => {
    e.preventDefault();
    const element = arrayHistorial.pop();
    generarDiv(element, documentoHistorial);
})
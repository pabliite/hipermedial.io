var randomPages = [
    "./choripan/choripan.html",
    "./cumpleanios/cumpleanios.html",
    "./hasbulla/hasbulla.html",
    "./por_si_o_por_no/por_si_o_por_no.html",
    "./mondrian_me/mondrian_me.html",
    "./long_fuck_you/long_fuck_you.html",
    "./verano/verano.html",
    "./fuera_milei/fuera_milei.html",
    "./botonera/botonera.html",
    "./circulos/circulos.html",
    "./cuadraditos/cuadraditos.html",
    "./cuadrados/cuadrados.html",
    "./pegale/pegale_a_milei.html",

];

var visitedPages = new Set(); // Conjunto para almacenar las páginas visitadas

function openRandomPage() {
    if (visitedPages.size === randomPages.length) {
        // Si todas las páginas han sido visitadas, reiniciar el conjunto
        visitedPages.clear();
    }

    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * randomPages.length);
    } while (visitedPages.has(randomIndex)); // Evitar índices repetidos

    visitedPages.add(randomIndex); // Marcar la página como visitada

    var randomPage = randomPages[randomIndex];
    window.open(randomPage, '_blank');
}

document.getElementById('randomPageButton').addEventListener('click', openRandomPage);

/*  
 var randomPages = [
    "./choripan/choripan.html",
    "./cumpleanios/cumpleanios.html",
    "./gatito/gatito.html",
    "./por_si_o_por_no/por_si_o_por_no.html",
    "./mondrian_me/mondrian_me.html",
    "./long_fuck_you/long_fuck_you.html",
];

function openRandomPage() {
    var randomPage = randomPages[Math.floor(Math.random() * randomPages.length)];
    window.open(randomPage, '_blank');
}

document.getElementById('randomPageButton').addEventListener('click', openRandomPage);*/


/*var randomPages = [
    "./choripan/choripan.html",
    "./cumpleanios/cumpleanios.html",
    "./gatito/gatito.html",
    "./por_si_o_por_no/por_si_o_por_no.html",
    "./mondrian_me/mondrian_me.html",
    "./long_fuck_you/long_fuck_you.html",
    "./verano/verano.html",
    "./fuera_milei/fuera_milei.html",
];

var lastRandomIndex = -1; // Inicializar con un valor fuera del rango válido

function openRandomPage() {
    var randomIndex = Math.floor(Math.random() * randomPages.length);
    
    // Verificar si el índice generado es igual al último
    while (randomIndex === lastRandomIndex) {
        randomIndex = Math.floor(Math.random() * randomPages.length); // Generar otro índice
    }
    
    lastRandomIndex = randomIndex; // Actualizar el último índice utilizado
    
    var randomPage = randomPages[randomIndex];
    window.open(randomPage, '_blank');
}

document.getElementById('randomPageButton').addEventListener('click', openRandomPage);*/

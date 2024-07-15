// Fecha de fin del mandato de Javier Milei en milisegundos (10 de diciembre de 2027)
const milestoneDate = new Date('2027-12-10T00:00:00').getTime();

function updateCountdown() {
    // Fecha y hora actual en milisegundos
    const now = new Date().getTime();

    // Diferencia entre la fecha límite y la fecha actual
    const difference = milestoneDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar el DOM con los valores calculados
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; // Agregar cero delante si el tiempo es menor a 10
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

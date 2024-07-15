document.addEventListener('DOMContentLoaded', function() {
    const reactiveImage = document.getElementById('reactiveImage');
    const imageSources = [
        './img/image1.jpg', 
        './img/image2.jpg', 
        './img/image3.jpg',
        './img/image4.jpg',
        './img/image5.jpg',
        './img/image6.jpg',
        './img/image7.jpg',
        './img/image8.jpg',
        './img/image9.jpg',
       
    ];
        const clicksPerChange = 20; // Cambia a la siguiente imagen cada 20 clics
        let clickCount = 0;
        let imageIndex = 0;
    
        let isRed = true;
    
        const SonidoLamento = new Audio('./audio/lamento.mp3'); 
    
        reactiveImage.addEventListener('click', function() {
            clickCount++;
            document.body.style.backgroundColor = isRed ? 'red' : 'black';
            isRed = !isRed;
    
            reactiveImage.classList.add('shake');
            setTimeout(() => {
                reactiveImage.classList.remove('shake');
            }, 500); // Duración de la animación de temblor
    
            if (clickCount >= clicksPerChange) {
                clickCount = 0; // Reinicia el contador de clics
                imageIndex++;
                if (imageIndex >= imageSources.length) {
                    imageIndex = 0; // Reinicia el índice de la imagen si se superan las imágenes disponibles
                }
                document.body.style.backgroundColor = 'yellow';
                setTimeout(() => {
                    reactiveImage.src = imageSources[imageIndex];
                    SonidoLamento.play(); 
                    document.body.style.backgroundColor = isRed ? 'red' : 'black'; // Vuelve al color alternante
                }, 100); // Duración del color amarillo
            }
        });
    });
    
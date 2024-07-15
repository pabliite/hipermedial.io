const API_KEY = 'fw8ELSKIuVNDfmgT4GhhW7tBZ1ScvSAB'; //  API key de Giphy

document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const question = document.getElementById('question').value;
    
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('questionForm');
    const retryButton = document.getElementById('retryButton');
    const resultGif = document.getElementById('resultGif');
    
    form.classList.add('hidden');
    retryButton.classList.remove('hidden');
    
    // Obtener respuesta aleatoria (Sí o No)
    const answer = getRandomAnswer();
    
    resultDiv.textContent = answer;
    resultDiv.style.color = answer === 'Sí' ? 'green' : 'red';
    
    // Muestra el gif correspondiente
    const gifQuery = answer === 'Sí' ? 'yes' : 'no';
    const gifUrl = await getGifUrl(gifQuery);
    resultGif.src = gifUrl;
    resultGif.classList.remove('hidden');
});

document.getElementById('retryButton').addEventListener('click', function() {
    const form = document.getElementById('questionForm');
    const resultDiv = document.getElementById('result');
    const retryButton = document.getElementById('retryButton');
    const resultGif = document.getElementById('resultGif');
    
    form.classList.remove('hidden');
    retryButton.classList.add('hidden');
    resultDiv.textContent = '';
    resultGif.classList.add('hidden');
    resultGif.src = '';
});

function getRandomAnswer() {
    const answers = ['Sí', 'No'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

async function getGifUrl(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=1&offset=${Math.floor(Math.random() * 50)}`);
    const data = await response.json();
    return data.data[0].images.fixed_height.url;
}

document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthdayDay = parseInt(document.getElementById('birthday-day').value, 10);
    const birthdayMonth = parseInt(document.getElementById('birthday-month').value, 10) - 1; // Meses en JavaScript son de 0 a 11
    
    const today = new Date();
    
    const isBirthday = birthdayDay === today.getDate() && birthdayMonth === today.getMonth();
    
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('birthdayForm');
    const retryButton = document.getElementById('retryButton');
    
    form.classList.add('hidden');
    retryButton.classList.remove('hidden');
    
    if (isBirthday) {
        resultDiv.textContent = '¡SI!';
        resultDiv.style.color = 'green';
        
        // papel picado
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        resultDiv.textContent = 'NO';
        resultDiv.style.color = 'red';
    }
});

document.getElementById('retryButton').addEventListener('click', function() {
    const form = document.getElementById('birthdayForm');
    const resultDiv = document.getElementById('result');
    const retryButton = document.getElementById('retryButton');
    
    form.classList.remove('hidden');
    retryButton.classList.add('hidden');
    resultDiv.textContent = '';
});
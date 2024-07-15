document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const buttons = document.querySelectorAll('.sound-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            playSound(soundFile);
        });
    });

    function playSound(soundFile) {
        audioPlayer.src = soundFile;
        audioPlayer.play();
    }
});

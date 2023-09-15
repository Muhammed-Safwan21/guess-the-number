const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');

checkButton.addEventListener('click', function () {
    const userGuess = parseInt(guessInput.value);
    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number.';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Try a higher number.';
    } else {
        message.textContent = 'Try a lower number.';
    }
});

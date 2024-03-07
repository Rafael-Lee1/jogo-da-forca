const words = ['javascript', 'programação', 'computador', 'desenvolvimento', 'html', 'css'];
let currentWord = '';
let hiddenWord = [];
let attempts = 6;

function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    hiddenWord = new Array(currentWord.length).fill('_');
    document.getElementById('word').textContent = hiddenWord.join(' ');
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    attempts = 6;
}

function guessLetter() {
    const guess = document.getElementById('guess').value.toLowerCase();
    if (guess.length === 1 && /^[a-z]$/.test(guess)) {
        if (currentWord.includes(guess)) {
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === guess) {
                    hiddenWord[i] = guess;
                }
            }
            document.getElementById('word').textContent = hiddenWord.join(' ');
        } else {
            attempts--;
        }

        if (attempts === 0) {
            document.getElementById('result').textContent = 'Você perdeu! Tente novamente.';
            document.getElementById('word').textContent = `A palavra era: ${currentWord}`;
        } else if (!hiddenWord.includes('_')) {
            document.getElementById('result').textContent = 'Parabéns! Você ganhou!';
        }
    } else {
        document.getElementById('result').textContent = 'Por favor, insira uma letra válida.';
    }
    document.getElementById('guess').value = '';
}

startGame();

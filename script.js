const textArray = ["Desenvolvedor", "Designer", "Freelancer", "Criativo"];
let currentIndex = 0;
let charIndex = 0;
const changingText = document.getElementById("changing-text");

function typeText() {
    if (charIndex < textArray[currentIndex].length) {
        changingText.textContent += textArray[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Ajuste o tempo para controlar a velocidade de digitação
    } else {
        setTimeout(eraseText, 2000); // Aguarda 2 segundos antes de apagar o texto
    }
}

function eraseText() {
    if (charIndex > 0) {
        changingText.textContent = textArray[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Ajuste o tempo para controlar a velocidade de apagamento
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(typeText, 500); // Pausa de 500ms antes de iniciar a próxima palavra
    }
}

// Inicia o efeito de digitação
typeText();

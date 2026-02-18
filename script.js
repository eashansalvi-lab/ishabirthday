
let count = 3;
const countdownEl = document.getElementById("countdown");
const popup = document.getElementById("popup");
const music = document.getElementById("music");

function updateCountdown() {
    countdownEl.innerText = count;
    countdownEl.style.transform = "scale(1.5)";
    countdownEl.style.transition = "0.5s";
    
    setTimeout(() => {
        countdownEl.style.transform = "scale(1)";
    }, 200);

    count--;

    if (count < 0) {
        countdownEl.style.display = "none";
        popup.style.display = "block";
        music.play();
        startHearts();
        startConfetti();
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();

/* Floating Hearts */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}


/* Confetti Party Popper */
function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.innerHTML = "🎉";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
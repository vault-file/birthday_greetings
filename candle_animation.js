const candle = document.getElementById("candle");
const instruction = document.getElementById("instruction");
const countdown = document.getElementById("countdown");
const candleSound = document.getElementById("candleSound");

let timerStarted = false;

candle.addEventListener("click", function () {

    if (timerStarted) {
        return;
    }

    timerStarted = true;

    candle.classList.add("off");

    candleSound.currentTime = 0;
    candleSound.play();

    instruction.textContent =
        "Make a wish, Birthday Girl! ✨🌸";

    let seconds = 30;

    countdown.textContent = seconds;

    const timer = setInterval(function () {

        seconds--;

        countdown.textContent = seconds;

        if (seconds <= 0) {

            clearInterval(timer);

            countdown.textContent = "";

            window.location.href = "album.html";
        }

    }, 1000);

});
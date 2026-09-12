const photos = [
    document.querySelector(".photo-1"),
    document.querySelector(".photo-2"),
    document.querySelector(".photo-3"),
    document.querySelector(".photo-4"),
    document.querySelector(".photo-5"),
    document.querySelector(".photo-6")
];

const photoStack =
    document.getElementById("photoStack");

const photoInstruction =
    document.getElementById("photoInstruction");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const catSection =
    document.getElementById("catSection");

const messageText =
    document.getElementById("messageText");

const loveMessage =
    document.getElementById("loveMessage");

const credit =
    document.getElementById("credit");

const typewriterSound =
    document.getElementById("typewriterSound");

const messageCard =
    document.getElementById("messageCard");

let currentPhoto = 0;
let musicStarted = false;
let carouselIndex = 0;
let carouselTimer;

const message =
    "Hi, HAHAHA! Happy Birthday, love! Thank you for your endless love and care. " +
    "Sometimes you really become my Prince Charming while I’m the princess in your club, eyyyy! 😂\n\n" +

    "So this is my simple yet effortful message with my builder partner, ChatGPT, " +
    "for the animation. Of course, I don’t really know much about animation yet. " +
    "But anyway, going back to Hana Lulu HAHAHA, so corny!\n\n" +

    "Thank you so much, love, for never making me feel like I’m to blame for whatever happens. " +
    "I don’t know if there are times when you actually do, but you never make me feel that way.\n\n" +

    "So that’s it, love. I hope you enjoy your birthday. I love you so much! ❤️\n\n" +

    "— From your wife";


photos.forEach(function (photo, index) {

    photo.addEventListener("click", function () {

        if (index !== currentPhoto) {
            return;
        }

        if (!musicStarted) {

            backgroundMusic.volume = 0.5;

            backgroundMusic.play().catch(function (error) {
                console.log("Music could not start:", error);
            });

            musicStarted = true;
        }

        photo.classList.add("hidden");

        currentPhoto++;

        if (currentPhoto < photos.length) {

            photoInstruction.textContent =
                "Tap again for another photo 🌸";

        } else {

            photoInstruction.textContent =
                "And of course, you’re still my favorite view. ♡";

            setTimeout(function () {
                showEnding();
            }, 800);
        }

    });

});


function showEnding() {

    photoInstruction.style.display = "none";

    photos.forEach(function (photo) {
        photo.classList.remove("hidden");
    });

    photoStack.classList.add("ending");

    startCarousel();

    setTimeout(function () {
        catSection.classList.add("show");
    }, 900);

    setTimeout(function () {
        messageCard.classList.add("show");
        startTyping();
    }, 1500);

}


function startCarousel() {

    updateCarousel();

    carouselTimer = setInterval(function () {

        carouselIndex++;

        if (carouselIndex >= photos.length) {
            carouselIndex = 0;
        }

        updateCarousel();

    }, 2200);

}


function updateCarousel() {

    const total = photos.length;

    photos.forEach(function (photo, index) {

        let position =
            (index - carouselIndex + total) % total;

        if (position === 0) {

            photo.style.transform =
                "translateX(-50%) scale(1) rotate(-2deg)";

            photo.style.opacity = "1";

            photo.style.zIndex = "6";

        } else if (position === 1) {

            photo.style.transform =
                "translateX(5%) scale(0.92) rotate(3deg)";

            photo.style.opacity = "1";

            photo.style.zIndex = "5";

        } else if (position === 2) {

            photo.style.transform =
                "translateX(110%) scale(0.84) rotate(-3deg)";

            photo.style.opacity = "1";

            photo.style.zIndex = "4";

        } else if (position === total - 1) {

            photo.style.transform =
                "translateX(-205%) scale(0.84) rotate(3deg)";

            photo.style.opacity = "0.65";

            photo.style.zIndex = "3";

        } else {

            photo.style.transform =
                "translateX(300%) scale(0.7)";

            photo.style.opacity = "0";

            photo.style.zIndex = "1";
        }

    });

}


function startTyping() {

    let index = 0;

    messageText.innerHTML = "";

    credit.classList.remove("show");

    typewriterSound.currentTime = 0;
    typewriterSound.loop = true;
    typewriterSound.volume = 0.35;

    typewriterSound.play().catch(function (error) {
        console.log("Typewriter sound could not start:", error);
    });

    const typing = setInterval(function () {

        const currentText =
            message.substring(0, index + 1);

        messageText.innerHTML = currentText
            .replace(/\n\n/g, "<br><br>")
            .replace(/\n/g, "<br>");

        index++;

        if (index >= message.length) {

            clearInterval(typing);

            typewriterSound.pause();
            typewriterSound.currentTime = 0;
            typewriterSound.loop = false;

            setTimeout(function () {
                credit.classList.add("show");
            }, 800);
        }

    }, 35);

}
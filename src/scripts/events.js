var card = document.querySelector(".card");
function toggleClass() {
    card.classList.toggle("flipped");
}

// Verifica si el dispositivo es móvil
function isMobileDevice() {
    return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
    );
}

if (isMobileDevice()) {
    card.addEventListener("click", toggleClass);
} else {
    card.addEventListener("mouseover", toggleClass);
    card.addEventListener("mouseout", toggleClass);
}

// ===============================
// PARAMÈTRES CONFIGURABLES
// ===============================

// Fourchette de taille (en pixels)
const MIN_SIZE = 50;
const MAX_SIZE = 200;

// Fourchette d'angle (en degrés)
const MIN_ROT = -30;
const MAX_ROT = 30;

// Débordement maximal autorisé (en pixels)
const MAX_OVERFLOW = 50;

// Liste des images possibles (ou une seule)
const images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/6.png",
    "img/7.png",
];
// Nombre aléatoire dans une fourchette
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// Choisir une image aléatoire si tableau
function pickImage() {
    return Array.isArray(images)
        ? images[Math.floor(Math.random() * images.length)]
        : images;
}

// ===============================
// FONCTION PRINCIPALE
// ===============================

function spawnRandomImage() {
    const img = document.createElement("img");
    img.src = pickImage();
    img.style.position = "absolute";
    img.style.pointerEvents = "none"; // pour éviter de bloquer les clics

    // Taille aléatoire
    const size = rand(MIN_SIZE, MAX_SIZE);
    img.style.width = size + "px";
    img.style.height = "auto";

    // Rotation aléatoire
    const rot = rand(MIN_ROT, MAX_ROT);
    img.style.transform = `rotate(${rot}deg)`;

    // Position aléatoire dans la fenêtre
    const maxX = window.innerWidth - size + MAX_OVERFLOW;
    const maxY = window.innerHeight - size + MAX_OVERFLOW;

    const x = rand(-MAX_OVERFLOW, maxX);
    const y = rand(-MAX_OVERFLOW, maxY);

    img.style.left = x + "px";
    img.style.top = y + "px";

    // Ajout à la page
    document.body.appendChild(img);
}

// ===============================
// ÉCOUTE DU BOUTON HTML
// ===============================

// Exemple : bouton avec id="spawnBtn"
document.addEventListener("DOMContentLoaded", () => {
    // Supporte l'image bouton avec ID monBouton
    const btn = document.getElementById("monBouton");
    if (btn) {
        btn.addEventListener("click", spawnRandomImage);
    }
});
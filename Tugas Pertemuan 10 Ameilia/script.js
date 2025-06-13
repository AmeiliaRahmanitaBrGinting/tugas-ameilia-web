// 1. Saat klik REGISTER atau LOGIN → tampilkan alert
document.querySelector("#register").addEventListener("click", () => {
  alert("Website Dalam Perbaikan");
});

document.querySelector("#login").addEventListener("click", () => {
  alert("Website Dalam Perbaikan");
});

// 2. Tulisan oranye terus berubah setiap 4 detik
const genreText = document.querySelector("#genre");
const genres = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];
let index = 0;

setInterval(() => {
  index = (index + 1) % genres.length;
  genreText.textContent = genres[index];
}, 4000);
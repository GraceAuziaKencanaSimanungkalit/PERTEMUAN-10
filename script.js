// Mengambil elemen menggunakan querySelector
const login = document.querySelector("#login");
const register = document.querySelector("#register");

// Event Login
login.addEventListener("click", function (e) {
  e.preventDefault();

  alert("Website Dalam Perbaikan");
});

// Event Register
register.addEventListener("click", function (e) {
  e.preventDefault();

  alert("Website Dalam Perbaikan");
});

// Tagline otomatis berubah
const teks = ["Horror", "Action", "Romance", "Comedy"];

let index = 0;

const tagline = document.querySelector("#tagline");

setInterval(function () {
  index++;

  if (index >= teks.length) {
    index = 0;
  }

  tagline.innerHTML = teks[index];
}, 4000);

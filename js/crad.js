// Ambil tombol
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// Tambahkan event listener untuk tombol geser kiri
leftButton.addEventListener('click', () => {
  slideLeft();
});

// Tambahkan event listener untuk tombol geser kanan
rightButton.addEventListener('click', () => {
  slideRight();
});

// Fungsi untuk menggeser profil ke kanan dan kiri
let profiles = document.querySelectorAll('.Profil');
let totalProfiles = profiles.length;
let currentStart = 0;

function displayProfiles(startIndex) {
  profiles.forEach((profile) => {
    profile.style.display = 'none';
  });

  for (let i = 0; i < 1; i++) {
    let index = (startIndex + i) % totalProfiles;
    profiles[index].style.display = 'flex';
  }
}

function slideRight() {
  currentStart = (currentStart + 1) % totalProfiles;
  displayProfiles(currentStart);
}

function slideLeft() {
  currentStart = (currentStart - 1 + totalProfiles) % totalProfiles;
  displayProfiles(currentStart);
}

// Inisialisasi awal
displayProfiles(currentStart);
const flame = document.getElementById('flame');
const btnFlower = document.getElementById('btnFlower');
const flowerOverlay = document.getElementById('flower-overlay');
const cardArea = document.getElementById('card-area');

// Klik Api Lilin
if (flame) {
    flame.addEventListener('click', function() {
        this.style.display = 'none'; // Api mati
        document.getElementById('headline').innerText = "HAPPY BIRTHDAY ALYAA";
        alert("HBD, Al. semoga harimu menyenangkan dan apa yang kamu mau terwujud semua, amin");
        alert("ayas anok hadiah kecil gawe umak");
        alert("Go ahead and tap the gift");
    });
}

// Buka Hadiah Bunga
btnFlower.addEventListener('click', function() {
    flowerOverlay.classList.remove('hidden');
    cardArea.classList.add('hidden');
    // Memastikan class not-loaded di body dihapus agar bunga mekar
    document.body.classList.remove("not-loaded");
});

// Tutup Hadiah
document.getElementById('btnCloseFlower').addEventListener('click', function() {
    flowerOverlay.classList.add('hidden');
    cardArea.classList.remove('hidden');
    document.body.classList.add("not-loaded");

});

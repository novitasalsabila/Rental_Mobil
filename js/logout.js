document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function(event) {
            event.preventDefault();
            // Lakukan proses logout di sini
            // Misalnya, arahkan ke halaman login
            window.location.href = "login.html"; // Ganti "login.html" dengan halaman login yang sesuai
        });
    }
});

// Mendapatkan elemen ikon di navbar
var navbarIcon = document.querySelector('.custom-navbar-cta .nav-link img');

// Menambahkan event listener untuk mengubah warna ikon saat halaman di-scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbarIcon.style.filter = 'grayscale(100%)'; // Mengubah warna ikon menjadi hitam saat di-scroll ke bawah
    } else {
        navbarIcon.style.filter = 'none'; // Mengembalikan warna ikon ke aslinya saat di-scroll ke atas
    }
});


// Fungsi untuk menangani klik pada tombol logout
function handleLogout() {
    // Redirect ke halaman landing_page.html
    window.location.href = "landing_page.html";
}

// Menambahkan event listener untuk tombol logout
document.addEventListener("DOMContentLoaded", function() {
    var logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Menghentikan perilaku default dari link
            handleLogout();
        });
    }
});

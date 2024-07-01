// Tentukan username dan password yang valid
const validUsername = "user1";
const validPassword = "password";

// Fungsi untuk memeriksa login
function login(event) {
    event.preventDefault(); // Mencegah form dari submit default

    // Ambil nilai dari input form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Periksa apakah username dan password sesuai
    if (username === validUsername && password === validPassword) {
        ;
        // Arahkan pengguna ke halaman berikutnya atau lakukan tindakan lain
        window.location.href = 'index.html'; // Contoh redirect ke halaman index.html
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
}

document.getElementById('form').addEventListener('submit', login);
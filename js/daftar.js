document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Menghentikan pengiriman form default

        // Memanggil fungsi validasi untuk memeriksa input sebelum mengirimkan data
        if (validateForm()) {
            // Jika validasi berhasil, submit form
            form.submit();
        }
    });

    function validateForm() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Memeriksa apakah semua input diisi
        if (!username || !email || !password || !confirmPassword) {
            alert("Silakan lengkapi semua kolom.");
            return false;
        }

        // Memeriksa apakah kata sandi cocok dengan konfirmasi kata sandi
        if (password !== confirmPassword) {
            alert("Kata sandi dan konfirmasi kata sandi tidak cocok.");
            return false;
        }

        // Memeriksa apakah kata sandi memiliki panjang yang cukup
        if (password.length < 6) {
            alert("Kata sandi harus memiliki minimal 6 karakter.");
            return false;
        }

        // Memeriksa apakah alamat email valid menggunakan regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Alamat email tidak valid.");
            return false;
        }

        return true; // Mengembalikan true jika semua validasi berhasil
    }
});
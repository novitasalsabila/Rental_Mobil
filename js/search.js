document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchBtn").addEventListener("click", function(event) {
      event.preventDefault(); // Mencegah perilaku default form
      
      // Ambil nilai input
      var searchValue = document.getElementById("searchInput").value.toLowerCase();
      
      // Ambil semua elemen mobil
      var cars = document.querySelectorAll(".car-wrap");

      // Loop melalui setiap elemen mobil
      cars.forEach(function(car) {
          // Ambil nama mobil dari elemen
          var carName = car.querySelector("h2").innerText.toLowerCase();

          // Periksa apakah nama mobil cocok dengan nilai pencarian
          if (carName.includes(searchValue)) {
              car.style.display = "block"; // Tampilkan mobil yang cocok
          } else {
              car.style.display = "none"; // Sembunyikan mobil yang tidak cocok
          }
      });
  });
});
// orders.js

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    const nama = document.querySelector('input[placeholder="Nama"]').value;
    const telepon = document.querySelector('input[placeholder="No telepon"]').value;
    const pickUpLocation = document.querySelector('input[placeholder="City, Airport, Station, etc"]').value;
    const dropOffLocation = document.querySelectorAll('input[placeholder="City, Airport, Station, etc"]')[1].value;
    const pickUpDate = document.getElementById('book_pick_date').value;
    const dropOffDate = document.getElementById('book_off_date').value;
    const pickUpTime = document.getElementById('time_pick').value;
    const jenisMobil = document.querySelector('select').value;
  
    const rentalData = {
      nama,
      telepon,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      jenisMobil
    };
  
    const existingRentals = JSON.parse(localStorage.getItem('rentals')) || [];
    existingRentals.push(rentalData);
    localStorage.setItem('rentals', JSON.stringify(existingRentals));
  
    window.location.href = 'orders.html';
  }
  
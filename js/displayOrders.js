// Function to display orders
function displayOrders() {
    const ordersContainer = document.getElementById('ordersContainer');
    const rentals = JSON.parse(localStorage.getItem('rentals')) || [];

    // Clear previous content
    ordersContainer.innerHTML = '';

    // Create table element
    const table = document.createElement('table');
    table.className = 'table table-bordered';

    // Create table header row
    const headerRow = table.createTHead().insertRow();
    headerRow.innerHTML = `
        <th>Nama</th>
        <th>No Telepon</th>
        <th>Pick-up Location</th>
        <th>Drop-off Location</th>
        <th>Pick-up Date</th>
        <th>Drop-off Date</th>
        <th>Pick-up Time</th>
        <th>Jenis Mobil</th>
        <th>Actions</th>
    `;

    // Create table body
    const body = table.createTBody();
    rentals.forEach((rental, index) => {
        const row = body.insertRow();
        row.innerHTML = `
            <td>${rental.nama}</td>
            <td>${rental.telepon}</td>
            <td>${rental.pickUpLocation}</td>
            <td>${rental.dropOffLocation}</td>
            <td>${rental.pickUpDate}</td>
            <td>${rental.dropOffDate}</td>
            <td>${rental.pickUpTime}</td>
            <td>${rental.jenisMobil}</td>
            <td><button class="btn btn-danger cancel-btn" data-index="${index}">Cancel Order</button></td>
        `;
    });

    // Append table to ordersContainer
    ordersContainer.appendChild(table);

    // Add event listener to each cancel button
    const cancelButtons = document.getElementsByClassName('cancel-btn');
    Array.from(cancelButtons).forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('data-index'));
            removeRental(index);
            displayOrders(); // Refresh the displayed orders after removal
        });
    });
}

// Function to remove rental from localStorage
function removeRental(index) {
    let rentals = JSON.parse(localStorage.getItem('rentals')) || [];
    rentals.splice(index, 1);
    localStorage.setItem('rentals', JSON.stringify(rentals));
}

// Call displayOrders function when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayOrders();
});

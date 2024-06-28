

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman otomatis

    // Mengambil nilai dari input form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Menampilkan nilai dalam alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
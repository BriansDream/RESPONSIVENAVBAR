// ambil elementnya, ambil menu toggelnya dulu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// Jika menu toggle kita click, maka jalankan function ini
menuToggle.addEventListener('click', function(){
    // toggle itu jika tidak ada classnya tambahin
    // Kalau ada classnya hilangkan 
    nav.classList.toggle('slide');
})
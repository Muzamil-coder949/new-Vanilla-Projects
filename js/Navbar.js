 document.addEventListener('DOMContentLoaded', () => {
 fetch('./Components/navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(err => console.error('Navbar error:', err));
});








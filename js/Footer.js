document.addEventListener('DOMContentLoaded', () => {
  fetch('./components/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(err => console.error('Footer error:', err));
});

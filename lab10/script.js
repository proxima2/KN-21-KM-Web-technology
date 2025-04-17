document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);

  this.reset();
});

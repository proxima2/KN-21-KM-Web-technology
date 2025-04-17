document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  let errors = [];

  if (name === "") errors.push("Ім'я обов'язкове.");
  if (!email.match(/^\S+@\S+\.\S+$/)) errors.push("Невірний email.");
  if (password.length < 6) errors.push("Пароль має бути не менше 6 символів.");
  if (password !== confirmPassword) errors.push("Паролі не співпадають.");
  if (!gender) errors.push("Оберіть стать.");

  const errorBox = document.getElementById("errorMessages");
  errorBox.innerHTML = "";

  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
  } 
  else {
    alert("Реєстрація успішна!");
    this.reset();
  }
});

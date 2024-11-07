function validateForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent =
      "Имя не может быть пустым";
    isValid = false;
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    document.getElementById("emailError").textContent = "Некорректный email";
    isValid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent =
      "Пароль должен быть минимум 6 символов";
    isValid = false;
  }

  if (isValid) {
    alert("Форма успешно отправлена!");
  }
}

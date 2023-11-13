const form = document.querySelector("form")

form.addEventListener("submit", handleLogin)

function handleLogin(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    console.log(email, password);
     
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
      } else {
        const login = {
          email: email.value,
          password: password.value,
        };
        console.log(login);
        event.currentTarget.reset();
      }
}
const loginForm = document.querySelector("#login-form")
const loginUsername = document.querySelector("#username")
const loginPassword = document.querySelector("#password")

loginForm.addEventListener("submit", function (event) {
    event.preventDefault()

    if (loginUsername.value == "elchonna" && loginPassword.value == "boludo123") {
        alert("logged in")
    } else {
        alert("password or username is incorrect")
    }

    console.log(loginUsername.value)
    console.log(loginPassword.value)
})
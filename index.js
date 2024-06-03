let id = document.querySelector(".id")
let password = document.querySelector(".password")
let button = document.querySelector("button")

button.addEventListener("click", () => {
    if (id.value === "12345" && password.value === "7040") {
        alert("Tizimga kirdingiz");
    } else {
       alert("possword yoki id hato");
    }
});
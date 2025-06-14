function customAlert(msg) {
  const alt = document.querySelector("#customAlert");
  alt.classList.remove("hidden");
  alt.innerHTML = "";
  const child = document.createElement("p");
  const node = document.createTextNode(msg);
  child.appendChild(node);
  alt.appendChild(child);
  setTimeout(() => {
    alt.removeChild(child);
    alt.classList.add("hidden");
  }, 3000);
}
function authenticate(email,password){
    return password=="1234"
}
document.querySelector("#btn").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".email").value.trim();
  const password = document.querySelector(".password").value.trim();
  if (email.length == 0 || password.length < 4 || password.length > 10) {
    customAlert("Please enter a valid email and password!");
  } else {
    if (authenticate(email, password)) {
      console.log("successful");
    } else {
      customAlert("Invalid credential for login!");
    }
  }
});

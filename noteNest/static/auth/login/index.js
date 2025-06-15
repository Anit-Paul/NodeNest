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

async function authenticate(email, password) {
  const response = await fetch("http://127.0.0.1:8000/auth/loginAPI/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), //convert the string into json format
  });
  const data = await response.json();
  if (response.ok) {
    console.log(response);
    return true;
  } else {
    return false;
  }
}

document
  .querySelector("#btn")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    const email = document.querySelector(".email").value.trim();
    const password = document.querySelector(".password").value.trim();
    if (email.length == 0 || password.length < 4 || password.length > 10) {
      customAlert("Please enter a valid email and password!");
    } else {
      const response = await authenticate(email, password);
      if (response) {
        console.log("successful");
      } else {
        customAlert("Invalid credential for login!");
      }
    }
  });

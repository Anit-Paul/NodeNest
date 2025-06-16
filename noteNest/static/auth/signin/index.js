let myOtp = "1234";
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

async function sendMail(email) {
  const response = await fetch(
    `http://127.0.0.1:8000/auth/mailAPI?email=${encodeURIComponent(email)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (response.ok) {
    myOtp = data.otp;
    return true;
  } else {
    return false;
  }
}

document
  .querySelector("#mailBtn")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    const email = document.querySelector("#email").value.trim();
    isSuccess = await sendMail(email);
    if (isSuccess) {
      const otp = document.querySelector("#otp");
      const verify = document.querySelector("#verify");
      otp.disabled = false;
      verify.disabled = false;
    } else {
      customAlert("please enter a valid email!");
    }
  });

document.querySelector("#verify").addEventListener("click", (event) => {
  event.preventDefault();
  const otp = document.querySelector("#otp");
  if (otp.value.trim() == String(myOtp)) {
    document.querySelector("#password").disabled = false;
    document.querySelector("#create").disabled = false;
    document.querySelector("#email").disabled = true;
    document.querySelector("#mailBtn").disabled = true;
    otp.disabled = true;
    verify.disabled = true;
  } else {
    customAlert("please enter a valid OTP!");
  }
});

document
  .querySelector("#create")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    if (password.length < 0 || password.length > 10) {
      customAlert(
        "The password length should have maximum 10 char and min 4 char"
      );
    } else {
      const response = await fetch("http://127.0.0.1:8000/auth/signinAPI/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data=await response.json()
      if (response.ok) {
        console.log(data)
        console.log("account created successfully");
      } else {
        
        customAlert(data.error || "Failed to create account");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    }
  });

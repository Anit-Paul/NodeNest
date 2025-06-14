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
function sendMail(emailId) {
  return true;
}
document.querySelector("#mailBtn").addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  if (sendMail(email)) {
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
  if (otp.value.trim() == myOtp) {
    document.querySelector("#password").disabled = false;
    document.querySelector("#create").disabled = false;
  } else {
    customAlert("please enter a valid OTP!");
  }
});
document.querySelector("#create").addEventListener("click", (event) => {
  event.preventDefault();
  password = document.querySelector("#password").value.trim();
  if (password.length < 0 || password.length > 10) {
    customAlert(
      "The password length should have maximum 10 char and min 4 char"
    );
  } else {
    console.log("done");
  }
});

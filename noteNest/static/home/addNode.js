document.querySelector("#save").addEventListener("click", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const content = document.querySelector("#noteContent").value.trim();

  if (name.length === 0) {
    alert("Please enter a name for this note.");
    return;
  }

  if (content.length === 0) {
    alert("Please enter content for this note.");
    return;
  }
  //post request
  const token = localStorage.getItem("token");
  console.log(token);
  const response = await fetch("http://127.0.0.1:8000/home/notes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ name, content }),
  });
  if (response.ok) {
    window.location.href = "/home/";
  } else {
    alert("something went wrong! try again.");
  }
});

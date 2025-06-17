document.addEventListener("DOMContentLoaded", async (e) => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/auth/login";
  } else {
    const response = await fetch(`http://127.0.0.1:8000/home/notes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const note = await response.json();
    const parent = document.querySelector(".notes");
    parent.innerHTML = "";
    note.data.forEach((item) => {
      const note_item = document.createElement("div");
      note_item.setAttribute("class", "note-item");

      const note_texts = document.createElement("div");
      note_texts.setAttribute("class", "note-texts");

      const note_title = document.createElement("div");
      note_title.setAttribute("class", "note-title");
      note_title.textContent = item.name;

      note_texts.appendChild(note_title);

      const note_menu = document.createElement("div");
      note_menu.setAttribute("class", "note-menu");

      const dropdown_hidden = document.createElement("div");
      dropdown_hidden.setAttribute("class", "dropdown hidden");

      const btn1 = document.createElement("button");
      btn1.setAttribute("class", "delete-btn");
      btn1.setAttribute("id", "delete");
      btn1.textContent = "Delete";

      const btn2 = document.createElement("button");
      btn2.setAttribute("class", "encrypt-btn");
      btn2.setAttribute("id", "encrypt");
      btn2.textContent = "Encrypt";

      dropdown_hidden.appendChild(btn1);
      dropdown_hidden.appendChild(btn2);
      note_menu.textContent = "⋯"; // icon
      note_menu.appendChild(dropdown_hidden);

      note_item.appendChild(note_texts);
      note_item.appendChild(note_menu);

      parent.appendChild(note_item);
    });
  }
});

const menuBtn = document.querySelector(".note-menu");
const dropdown = menuBtn.querySelector(".dropdown");

// Toggle dropdown menu visibility
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent bubbling
  dropdown.classList.toggle("hidden");
});

// Hide dropdown when clicking outside
document.addEventListener("click", () => {
  dropdown.classList.add("hidden");
});

document.querySelector("#newNote").addEventListener("click", (event) => {
  window.location.href = "addNode.html";
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const noteItem = event.target.closest(".note-item");
    if (noteItem) {
      const confirmed = confirm("Do you really want to delete this note?");
      if (confirmed) {
        noteItem.remove();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/auth/login";
    return;
  }

  const response = await fetch("http://127.0.0.1:8000/home/notes/", {
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
    note_item.className = "note-item";

    const note_texts = document.createElement("div");
    note_texts.className = "note-texts";

    const note_title = document.createElement("div");
    note_title.className = "note-title";
    note_title.textContent = item.name;

    note_texts.appendChild(note_title);

    const note_menu = document.createElement("div");
    note_menu.className = "note-menu";

    const menu_icon = document.createElement("span");
    menu_icon.textContent = "⋯";
    menu_icon.style.cursor = "pointer";

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown hidden";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    const encryptBtn = document.createElement("button");
    encryptBtn.className = "encrypt-btn";
    encryptBtn.textContent = "Encrypt";

    dropdown.appendChild(deleteBtn);
    dropdown.appendChild(encryptBtn);

    note_menu.appendChild(menu_icon);
    note_menu.appendChild(dropdown);
    note_item.appendChild(note_texts);
    note_item.appendChild(note_menu);
    parent.appendChild(note_item);

    // Toggle dropdown visibility
    menu_icon.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });

    // Delete handler
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this note?")) {
        note_item.remove();
      }
    });
  });

  // Hide all dropdowns if clicking anywhere else
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".dropdown")
      .forEach((d) => d.classList.add("hidden"));
  });
});

// Redirect to note creation
document.querySelector("#newNote").addEventListener("click", () => {
  window.location.href = "addnote/";
});

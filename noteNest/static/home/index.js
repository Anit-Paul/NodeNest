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

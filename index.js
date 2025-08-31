const button           = document.getElementById("addBookmarkBtn");
const inputN           = document.getElementById("bookmarkName");
const inputM           = document.getElementById("bookmarkMail");
const inputP           = document.getElementById("bookmarkPhone");
const list             = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderAll() {
  list.innerHTML = "";
  bookmarks.forEach((b, idx) => renderItem(b, idx));
}

function renderItem({ name, mail, phone }, index) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>Name: ${name} </span>
    <span>Email: ${mail} </span>
    <span>Number Phone: ${phone} </span>
    <button class="delete">✕</button>
  `;
  list.appendChild(li);

  li.querySelector(".delete").addEventListener("click", () => {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderAll();
  });
}

button.addEventListener("click", () => {
  const name  = inputN.value.trim();
  const mail  = inputM.value.trim();
  const phone = inputP.value.trim();

  if (!name || !mail || !phone) return;

  bookmarks.push({ name, mail, phone });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  inputN.value = "";
  inputM.value = "";
  inputP.value = "";

  renderAll();
});

renderAll();
// button.addEventListener("click", () => {
//   const url2 = inputM.value.trim();
//   if (!url2) return;
//   bookmarks.push(url2);
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//   renderItem(url2);
//   inputM.value = "";
// });

// button.addEventListener("click", () => {
//   const url3 = inputP.value.trim();
//   if (!url3) return;
//   bookmarks.push(url3);
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//   renderItem(url3);
//   inputP.value = "";
// });

// selecting the add_a_new_book form
const form = document.getElementById("new-book");

// rendering the books which are in the myLibrary array
const myBooks = myLibrary
  .map((book) => {
    return `
      <div class="book">
        <div>
          <button class="remove">❌</button>
          <p> ${book.title.toLowerCase()}</p>
          <p> by ${book.author.toLowerCase()}</p>
          <p> ${book.pages} pages</p>
          <p> ${book.read ? "✅ read" : "⛔️ not yet"}</p>
        </div>
        <button class="read">read</button>
      </div>`;
  })
  .join("");

const books = document.querySelector(".books");
books.innerHTML = myBooks;

// listening to the submit event on the form to add a new book
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const readValue = read.checked;
  const newBook = addBookToLibrary(
    title.value,
    author.value,
    pages.value,
    readValue
  );
  if (
    Object.values(newBook).some((x) => x === "") ||
    Object.values(newBook).some((x) => x === null) ||
    Object.values(newBook).some((x) => x === undefined)
  ) {
    return;
  } else {
    myLibrary.push(newBook);
    renderBook(newBook);
    form.reset();
  }
});

// listening to the click event on the remove btn to remove a book from the myLibrary array
document.querySelectorAll(".remove").forEach((removeBtn) => {
  removeBtn.addEventListener("click", (event) => {
    const book = event.target.parentElement.parentElement;
    books.removeChild(book);
  });
});

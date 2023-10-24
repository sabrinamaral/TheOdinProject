function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title}, ${author}, ${pages}, ${read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  return new Book(title, author, pages, read);
}

// rendering the book added from the form
function renderBook(book) {
  const booksContainer = document.querySelector(".books");
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookDiv.innerHTML = `
    <button class="remove">❌</button>
      <div>
        <p> ${book.title.toLowerCase()}</p>
        <p> by ${book.author.toLowerCase()}</p>
        <p> ${book.pages} pages</p>
        <p> ${book.read ? "✅ read" : "⛔️ not yet"}</p>
      </div>
    <button class="read">read</button>`;
  booksContainer.appendChild(bookDiv);

  //remove the book that was added using the form
  const removeBtn = bookDiv.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    booksContainer.removeChild(bookDiv);
  });
}

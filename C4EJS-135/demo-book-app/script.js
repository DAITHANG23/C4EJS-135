// DOM
const mainElement = document.getElementById("main");

const API_GET_BOOKS = "https://api.itbook.store/1.0/new";

//Lấy Data từ Api
getBooks();

async function getBooks() {
    const res = await fetch(API_GET_BOOKS);
    const data = await res.json();
    console.log(data);
    // Step 2: Mang 1 chieu chua thong tin cac bo phim
    const { books } = data;

    //   step 3:
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        console.log(`${i} - `, book);
        const { image, price, subtitle, title } = book;

        // Tạo 1 book element

        const bookElement = document.createElement("div");
        bookElement.classList.add("movie");

        const bookElmcontnent = `
    <img
          src="${image}"
          alt="Snowflake: The Definitive Guide"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span>${price}</span>
        </div>
        <div class="movie-overview">
          <h3>Overview</h3>
          <p>${subtitle}</p>
        </div>
    `;
        bookElement.innerHTML = bookElmcontnent;
        mainElement.appendChild(bookElement);
    }
}

// Đăng nhập và chuyển sang dashboard
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn hành động mặc định của form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra đăng nhập
    if (username === "LongNhat" && password === "LongNhat05") {
        // Ẩn phần đăng nhập và hiển thị dashboard
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard').classList.remove('hidden');
        
        // Hiển thị danh sách sách
        displayBooks();
    } else {
        document.getElementById('login-error').textContent = "Sai thông tin đăng nhập! Vui lòng thử lại.";
    }
});

// Danh sách sách hiện có
let books = [
    { title: "Lập trình C++", author: "Nguyễn Văn A", year: 2021 },
    { title: "Cơ sở dữ liệu", author: "Lê Văn B", year: 2020 },
    { title: "Mạng máy tính", author: "Trần Văn C", year: 2019 }
];

// Hiển thị danh sách sách ban đầu
function displayBooks(filteredBooks = books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Xóa danh sách cũ

    filteredBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${book.title}</strong> - ${book.author} (Năm: ${book.year})</span>
            <button onclick="deleteBook(${index})">Xóa</button>
        `;
        bookList.appendChild(li);
    });
}

// Chức năng tìm kiếm sách
function searchBooks() {
    const searchValue = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    displayBooks(filteredBooks);
}

// Thêm sách mới vào danh sách
document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn hành động mặc định của form

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    // Thêm sách mới
    books.push({ title, author, year });

    // Cập nhật danh sách
    displayBooks();

    // Reset form
    this.reset();
});

// Xóa sách
function deleteBook(index) {
    books.splice(index, 1); // Xóa sách khỏi danh sách
    displayBooks(); // Cập nhật danh sách
}

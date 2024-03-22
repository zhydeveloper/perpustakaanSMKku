window.addEventListener("DOMContentLoaded", function () {
  var bookList = document.getElementById("Javascript Profisional");

  // Ambil data dari Web Storage
  var bookStatus = localStorage.getItem("bookJavascriptProfisional");

  if (bookStatus) {
    // Parse data JSON dari Web Storage
    var bookData = JSON.parse(bookStatus);

    // Tambahkan data ke dalam tabel
    var row = document.createElement("tr");
    var titleCell = document.createElement("td");
    var statusCell = document.createElement("td");
    var removeCell = document.createElement("td"); // Menambahkan sel untuk tombol remove

    titleCell.textContent = bookData.title;
    statusCell.textContent = bookData.status;

    // Tombol remove
    var removeButton = document.createElement("button");
    removeButton.innerHTML = '<i data-feather="trash-2"></i>';
    removeButton.addEventListener("click", function () {
      // Hapus data dari local storage
      localStorage.removeItem("bookJavascriptProfisional");
      // Hapus baris dari tabel
      row.remove();
    });

    removeCell.appendChild(removeButton);
    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(removeCell);

    bookList.appendChild(row);

    // Panggil fungsi feather.replace() setelah menambahkan tombol remove
    feather.replace();
  }
});

 window.addEventListener("DOMContentLoaded", function() {
  var bookList = document.getElementById("Dasar-dasar Web Progamming");
  
  // ambil data dari webstorage 
  var bookStatus = localStorage.getItem("bookDasar-dasarWebProgamming ");

  if (bookStatus) {
    var bookData = JSON.parse(bookStatus);
    var row = document.createElement("tr");
    var titleCell = document.createElement("td");
    var statusCell = document.createElement("td");
    var removeCell = document.createElement("td"); // Menambahkan sel untuk tombol remove

    titleCell.textContent = bookData.title;
    statusCell.textContent = bookData.status;

    // Tombol remove
    var removeButton = document.createElement("button");
    removeButton.innerHTML = '<i data-feather="trash-2"></i>';
    removeButton.addEventListener("click", function () {
      // Hapus data dari local storage
      localStorage.removeItem("bookDasar-dasarWebProgamming ");
      // Hapus baris dari tabel
      row.remove();
    });

    removeCell.appendChild(removeButton);
    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(removeCell);

    bookList.appendChild(row);

    // Panggil fungsi feather.replace() setelah menambahkan tombol remove
    feather.replace();
  }
  
 });
 window.addEventListener("DOMContentLoaded", function() {
  var bookList = document.getElementById("HTML.CSS.Javascript");
  
  // ambil data dari webstorage 
  var bookStatus = localStorage.getItem("bookHTML.CSS.Javascript");

  if (bookStatus) {
    var bookData = JSON.parse(bookStatus);
    var row = document.createElement("tr");
    var titleCell = document.createElement("td");
    var statusCell = document.createElement("td");
    var removeCell = document.createElement("td"); // Menambahkan sel untuk tombol remove

    titleCell.textContent = bookData.title;
    statusCell.textContent = bookData.status;

    // Tombol remove
    var removeButton = document.createElement("button");
    removeButton.innerHTML = '<i data-feather="trash-2"></i>';
    removeButton.addEventListener("click", function () {
      // Hapus data dari local storage
      localStorage.removeItem("bookHTML.CSS.Javascript");
      // Hapus baris dari tabel
      row.remove();
    });

    removeCell.appendChild(removeButton);
    row.appendChild(titleCell);
    row.appendChild(statusCell);
    row.appendChild(removeCell);

    bookList.appendChild(row);

    // Panggil fungsi feather.replace() setelah menambahkan tombol remove
    feather.replace();
  }
  
 });
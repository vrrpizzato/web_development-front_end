window.onload = function () {
  fetch("http://localhost:4000/api/books", { method: "GET" })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(response => {
      const items = response.data;

      const html = items.reduce(
        (acc, book) =>
          acc +
          `<div id="${book.id}" class="w-3/4 bg-darkgray border p-4 rounded text-white">
              <p><strong>Titulo:</strong> ${book.titulo}</p>
              <p><strong>Editora:</strong> ${book.editora}</p>
              <p><strong>Publicação:</strong> ${book.data_publicacao}</p>
              <p><strong>Edição:</strong> ${book.edicao}</p>
              <p><strong>ISBN10:</strong> ${book.isbn_10}</p>
              <p><strong>ISBN13:</strong> ${book.isbn_13}</p>
              <p><strong>Nº Páginas:</strong> ${book.numero_de_paginas}</p>
              <p><strong>Peso (g):</strong> ${book.peso}</p>
              <p><strong>Dimensões (cm):</strong> ${book.dimensoes}</p>
              
              <button type="button" class="btn-editar bg-blue text-white" data-id="${book.id}">
                Editar
              </button>
              
              <button type="button" class="btn-excluir bg-red text-white" data-id="${book.id}">
                Excluir
              </button>
            </div>`,
        ""
      );

      document.getElementById("books").innerHTML = html;

      document.querySelectorAll(".btn-editar").forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.dataset.id;

          window.location.href = `./form.html?id=${id}`;
        });
      });

      document.querySelectorAll(".btn-excluir").forEach((btn) => {
        btn.addEventListener("click", function () {
          if (window.confirm("Deseja excluir?")) {
            const id = this.dataset.id;
            fetch(`http://localhost:4000/api/books/${id}`, { method: "DELETE" })
              .then(response => {
                window.location.href = "./index.html";
              })
              .catch(err => console.error(err));
          }
        });
      });
    })
    .catch((error) => {
      document.getElementById("output").textContent = "Error: " + error.message;
    });
};


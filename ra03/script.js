window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    loadEditData(id);
  }

  validation();
  formSubmit(id);
};

function loadEditData(id) {
  fetch(`http://localhost:4000/api/books/${id}`)
    .then(res => res.json())
    .then(book => {
      document.getElementById("titulo").value = book.data.titulo;
      document.getElementById("publicacao").value = book.data.data_publicacao;
      document.getElementById("editora").value = book.data.editora;
      document.getElementById("edicao").value = book.data.edicao;
      document.getElementById("idioma").value = book.data.idioma;
      document.getElementById("isbn10").value = book.data.isbn_10;
      document.getElementById("isbn13").value = book.data.isbn_13;
      document.getElementById("numero_paginas").value = book.data.numero_de_paginas;
      document.getElementById("peso").value = book.data.peso;
      document.getElementById("dimensoes").value = book.data.dimensoes;

      document.querySelector("span.font-bold").innerText = "EDITAR LIVRO";
    })
    .catch(err => console.error("Erro ao carregar livro:", err));
}

function validation() {
  window.validationArr = new Array(10).fill(false);

  validateText("titulo", 0, 3, "errorTitulo", "*titulo deve conter no mínimo 3 caracteres");
  validateText("publicacao", 1, 1, "errorPublicacao", "*data de publicação é obrigatória");
  validateText("editora", 2, 2, "errorEditora", "*editora deve conter no mínimo 2 caracteres");
  validateText("edicao", 3, 1, "errorEdicao", "*edição é obrigatória");
  validateText("idioma", 4, 2, "errorIdioma", "*idioma deve conter no mínimo 2 caracteres");

  validateText("isbn10", 5, 10, "errorIsbn10", "*ISBN10 deve ter 10 caracteres");
  validateText("isbn13", 6, 13, "errorIsbn13", "*ISBN13 deve ter 13 caracteres");

  validateText("numero_paginas", 7, 1, "errorNumeroPaginas", "*nº páginas é obrigatório");
  validateText("peso", 8, 1, "errorPeso", "*peso é obrigatório");
  validateText("dimensoes", 9, 3, "errorDimensoes", "*dimensões deve conter no mínimo 3 caracteres");
}

function validateText(id, index, minLength, errorId, message) {
  const element = document.getElementById(id);

  element.addEventListener("change", () => {
    const value = element.value.trim();

    if (value.length < minLength) {
      document.getElementById(errorId).innerText = message;
      validationArr[index] = false;
    } else {
      document.getElementById(errorId).innerText = "";
      validationArr[index] = true;
    }
  });
}

function formSubmit(id) {
  const form = document.forms["formulario"];

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    
    if (window.validationArr.includes(false)) {
      window.alert("Por favor, preencha todos os campos.");
      return;
    }

    const body = {
      book: {
      titulo: form.titulo.value,
      data_publicacao: form.publicacao.value,
      editora: form.editora.value,
      edicao: form.edicao.value,
      idioma: form.idioma.value,
      isbn_10: form.isbn10.value,
      isbn_13: form.isbn13.value,
      numero_de_paginas: form.numero_paginas.value,
      peso: form.peso.value,
      dimensoes: form.dimensoes.value}
    };

    try {
      if (id) {
        await fetch(`http://localhost:4000/api/books/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      } else {
        await fetch("http://localhost:4000/api/books", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      }

      window.location.href = "./index.html";
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
    }
  });
}

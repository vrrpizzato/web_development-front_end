window.onload = function() {
  function getValor(id) {
    const element = document.getElementById(id);
    return element?.value || '';
  }

  function calcularOperacao(id1, id2, operacao, resultadoId, errorMensagem) {
    const valor1 = getValor(id1);
    const valor2 = getValor(id2);

    if (valor1 === '' || valor2 === '') {
      alert(errorMensagem);
      return;
    } else {
      const resultado = operacao(parseInt(valor1), parseInt(valor2));
      document.getElementById(resultadoId).textContent = `${resultado}`;
    }
  }

  function filtroPar(arrayInput) {
    if (arrayInput === '') {
      alert('Por favor, insira números inteiros no campo para realizar os métodos.');
      return;
    } else {
      const arrayValues = arrayInput.split(',');
      const resultado = arrayValues.filter((inteiro) => (inteiro % 2 ) == 0);
      document.getElementById('array-resultado').textContent = `${resultado.toString()}`;
    }
  };

  function calcularMedia(arrayInput) {
    if (arrayInput === '') {
      alert('Por favor, insira números inteiros no campo para realizar os métodos.');
      return;
    } else {
      const arrayValues = arrayInput.split(',');
      const n = arrayValues.length;
      const resultado = arrayValues.reduce((acc, value) => acc + parseInt(value), 0) / n;
      document.getElementById('array-resultado').textContent = `${resultado.toFixed(2)}`;
    }
  }

  const adicaoBtn = document.getElementById("btn-adicao");
  if (adicaoBtn) {
    adicaoBtn.addEventListener("click", function() {
    calcularOperacao('valor-1-adicao', 'valor-2-adicao', (a, b) => a + b, 'resultado-adicao', 'Por favor, é necessário inserir dois números para realizar a adição.')
    });
  }

  const subtracaoBtn = document.getElementById('btn-subtracao');
  if (subtracaoBtn) {
    subtracaoBtn.addEventListener("click", function() {
      calcularOperacao('valor-1-subtracao', 'valor-2-subtracao', (a, b) => a - b, 'resultado-subtracao', 'Por favor, é necessário inserir dois números para realizar a subtração.')
    });
  }

  const multiplicacaoBtn = document.getElementById('btn-multiplicacao');
  if (multiplicacaoBtn) {
    multiplicacaoBtn.addEventListener("click", function () {
      calcularOperacao('valor-1-multiplicacao', 'valor-2-multiplicacao', (a, b) => a * b, 'resultado-multiplicacao', 'Por favor, é necessário inserir dois números para realizar a multiplicação.')
    });
  }

  const divisaoBtn = document.getElementById('btn-divisao');
  if (divisaoBtn) {
    divisaoBtn.addEventListener("click", function () {
      calcularOperacao('valor-1-divisao', 'valor-2-divisao', (a, b) => a / b, 'resultado-divisao', 'Por favor, é necessário inserir dois números para realizar a divisão.')
    });
  }

  const filtroParBtn = document.getElementById('btn-filtro-par');
  if (filtroParBtn) {
    filtroParBtn.addEventListener("click", function () {
      const arrayInput = getValor('input-array');
      filtroPar(arrayInput);
    });
  }
  
  const calcularMediaBtn = document.getElementById('btn-calcular-media');
  if (calcularMediaBtn) {
    calcularMediaBtn.addEventListener("click", function () {
      const arrayInput = getValor('input-array');
      calcularMedia(arrayInput);
    });
  }
}

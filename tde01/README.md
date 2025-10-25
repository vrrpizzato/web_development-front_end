# Objetivo
* Compreender e aplicar funções em JavaScript, explorando parâmetros, retorno de valores e reutilização de código.

# Descrição
* Desenvolver uma pequena aplicação que utilize funções para realizar operações matemáticas e manipulação de dados. A atividade deve evidenciar o uso de funções nomeadas, funções anônimas e arrow functions.

# O que deve ser feito:
* Criar funções que realizem operações básicas (soma, subtração, multiplicação, divisão);
* Implementar uma função que manipule arrays (ex: filtrar números pares, calcular média);
* Usar arrow functions em pelo menos duas partes do código;
* Criar uma função que receba outra função como parâmetro (callback).

## SCRIPT.JS
#### &getValor/1

`function getValor(id) {
  const element = document.getElementById(id);
  return element?.value || '';
}`

Retorna o valor do elemento HTML `input` a partir de seu ID, caso o elemento não exista ou vazio, retorna uma string vazia (`''`). 


#### &calcularOperacao/5

`function calcularOperacao(id1, id2, operacao, resultadoId, errorMensagem) {
    const valor1 = getValor(id1);
    const valor2 = getValor(id2);
    if (valor1 === '' || valor2 === '') {
      alert(errorMensagem);
      return;
    } else {
      const resultado = operacao(parseInt(valor1), parseInt(valor2));
      document.getElementById(resultadoId).textContent = `${resultado}`;
}}`
  
Executa uma opereção matemática entre dois valores de elementos HTML `input`, respectivamente, `id1` e `id2`, caso algum campo esteja vazio, exibe a mensagem de erro `errorMensagem`. O resultado é exibido em um elemento HTML com o atributo ID `resultadoId`. 


#### &filtroPar/1

`function filtroPar(arrayInput) {
  if (arrayInput == '') {
    alert('Por favor, insira números inteiros no campo para realizar os métodos.');
  } else {
    const arrayValues = arrayInput.split(",");
    const resultado = arrayValues.filter((inteiro) => (inteiro % 2) == 0);
    document.getElementById('array-resultado').textContent = `${resultado.toString()}`;
  }
}`

Filta os números pares de uma lista de inteiros a partir de uma string. O resultado é exibido em um elemento HTML com o atributo ID `array-resultado`.


#### &calcularMedia/1

`function filtroPar(arrayInput) {
  if (arrayInput == '') {
    alert('Por favor, insira números inteiros no campo para realizar os métodos.');
  } else {
    const arrayValues = arrayInput.split(",");
    const resultado = arrayValues.filter((inteiro) => (inteiro % 2) == 0);
    document.getElementById('array-resultado').textContent = `${resultado.toString()}`;
  }
}`

Calcula a média aritmética simples de uma lista de inteiros a partir de uma string. O resultado é exibido em um elemento HTML com o atributo ID `array-resultado`.

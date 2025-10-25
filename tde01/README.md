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
Retorna o valor do elemento HTML input a partir de seu ID.
'function getValor(id) {
  const element = document.getElementById(id);
  return element?.value || '';
}'

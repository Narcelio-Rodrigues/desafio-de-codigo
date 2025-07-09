# Aula - Criando e Manipulando Vetores e Matrizes

### 📌 **1. Vetores (Arrays)**

#### ✅ O que são?

* Estrutura que **guarda vários valores em uma única variável**.

#### ✅ Como criar:

```javascript
let frutas = ["maçã", "banana", "laranja"];
```

#### ✅ Operações comuns:

| Ação                | Código                      |
| ------------------- | -------- ------------------- |
| Acessar item        | `frutas[0]`                 |
| Adicionar no fim    | `frutas.push("uva")`        |
| Remover do fim      | `frutas.pop()`              |
| Adicionar no início | `frutas.unshift("morango")` |
| Remover do início   | `frutas.shift()`            |
| Tamanho do vetor    | `frutas.length`             |

#### ✅ Laços para percorrer:

```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let fruta of frutas) {
  console.log(fruta);
}
```

---

### 📌 **2. Matrizes (Arrays Bidimensionais)**

#### ✅ O que são?

* Vetores **dentro de vetores** (linhas e colunas).
* Usados para representar **tabelas, mapas, tabuleiros** etc.

#### ✅ Como criar:

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

#### ✅ Acessar/Alterar valores:

```javascript
console.log(matriz[1][2]); // 6
matriz[0][0] = 10;
```

#### ✅ Laços aninhados:

```javascript
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```

#### ✅ Criando matriz vazia dinamicamente:

```javascript
let linhas = 3;
let colunas = 3;
let matriz = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = 0; // valor inicial
  }
}
```

---

### ✅ Dicas Finais

* Vetores usam 1 índice (`vetor[i]`), matrizes usam 2 (`matriz[i][j]`);
* Você pode usar `console.table(matriz)` para ver a matriz formatada no console;
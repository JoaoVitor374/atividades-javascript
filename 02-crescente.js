let numeros = [8, 3, 5];

function colocarEmOrdemCrescente(numeros) {
let numerosOrdenados = [...numeros].sort((a, b) => a - b);

return `Os números em ordem crescente são: ${numerosOrdenados.join(", ")}.`;
}

console.log(colocarEmOrdemCrescente(numeros));
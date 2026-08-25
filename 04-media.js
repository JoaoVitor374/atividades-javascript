let numeros = [10, 8, 7, 9, 6];

function calcularMedia(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }

    let media = soma / numeros.length;

    return "A média dos valores é: " + media.toFixed(2);
}

console.log(calcularMedia(numeros));
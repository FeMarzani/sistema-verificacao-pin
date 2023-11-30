"use strict"

// Gerando Valor Randômico para o PIN
let pin = Math.floor(Math.random()*100);

// Printando o pin no console.
console.log(`O PIN foi gerado: ${pin}`);

// Criando a função para ler o número do usuário inserido no html
function lerNumero() {
    let num = document.getElementById("num").value;
    console.log(`O número inserido pelo usuário foi ${num}`);
    return num;
}

function verificarNumero(num) {
    if (num.length === 0) {
        alert("Insirá pelo menos um valor.");
    } else if (num == pin) {
        alert(`PARABÉNS, VOCÊ ACERTOU. O PIN ERA ${pin}`);
        document.getElementById('resultado').innerHTML = `PARABÉNS, VOCÊ ACERTOU. O PIN ERA ${pin}.`;
    } else if (num > 100) {
        document.getElementById('resultado').innerHTML = "Insira um valor menor que 100.";
    } else if (num >= 0.90 * pin && num < pin) {
        document.getElementById('resultado').innerHTML = "Você está próximo, digite algum valor um pouco acima.";
    } else if (num <= 0.90 * pin && num < pin) {
        document.getElementById('resultado').innerHTML = "Você está longe, digite um valor mais alto.";
    } else if (num > pin && num < pin + pin * 0.10) {
        document.getElementById('resultado').innerHTML = "Você está próximo, insira um número menor.";
    } else {
        document.getElementById('resultado').innerHTML = "Você está longe, digite um valor muito menor.";
    }
}
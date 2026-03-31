const produto = "Danone";
let valor = 10.00;
let desconto = (valor*5)/100;
console.log(produto + ": R$" + (valor - desconto) + " (Desconto: " + desconto + ")");
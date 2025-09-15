const valor = parseFloat(process.argv[2]);
const origem = process.argv[3];
const destino = process.argv[4];

let resultado;

if (origem === "km" && destino === "milhas") {
  resultado = valor * 0.621371;
  console.log(`${valor} quilômetros é igual a ${resultado.toFixed(2)} milhas.`);
} else if (origem === "celsius" && destino === "fahrenheit") {
  resultado = (valor * 9) / 5 + 32;
  console.log(`${valor} graus Celsius é igual a ${resultado.toFixed(2)} graus Fahrenheit.`);
} else {
  console.log("Conversão não suportada.");
}

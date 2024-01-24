// JavaScript nos oferece a estrutura try-catch para lidar com erros de forma elegante.

try {
  // Código que pode lançar um erro
  let resultado = dividirDoisNumeros(10, 0);
} catch (erro) {
  console.error(erro);
}
// Aqui, qualquer erro que acontecer dentro do bloco try será capturado pelo catch, que então pode lidar com o erro de forma adequada.

// Lançando Erros Customizados
// Você também pode criar e lançar seus próprios erros usando throw.

function dividirDoisNumeros(a, b) {
  if (b === 0) {
    throw new Error("Não pode dividir por zero!");
  }
  return a / b;
}
// Neste exemplo, lançamos um erro se alguém tenta dividir um número por zero.


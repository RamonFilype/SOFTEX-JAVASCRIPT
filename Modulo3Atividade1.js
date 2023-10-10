// Função tradicional sem parâmetros
function saudacao() {
    console.log("Olá, seja bem-vindo à calculadora!\n");
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
  }
  
  // Função tradicional com parâmetros e retorno de valor (soma)
  function somar(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno de valor (subtração)
  const subtrair = (a, b) => a - b;
  
  // Arrow function com parâmetros e retorno de valor (multiplicação)
  const multiplicar = (a, b) => a * b;
  
  // Arrow function com parâmetros e retorno de valor (divisão)
  const dividir = (a, b) => (b !== 0 ? a / b : "Divisão por zero não é permitida.");
  
  // Função para ler a escolha do usuário e realizar a operação selecionada
  function calcular() {
    const opcao = prompt("Digite o número da operação desejada: ");
    if (opcao === "5") {
      console.log("Obrigado por usar a calculadora. Adeus!");
      return;
    }
  
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
  
    switch (opcao) {
      case "1":
        console.log("Resultado da soma:", somar(num1, num2));
        break;
      case "2":
        console.log("Resultado da subtração:", subtrair(num1, num2));
        break;
      case "3":
        console.log("Resultado da multiplicação:", multiplicar(num1, num2));
        break;
      case "4":
        console.log("Resultado da divisão:", dividir(num1, num2));
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  
    calcular(); // Chama a função novamente para permitir mais cálculos
  }
  
  // Função principal
  function main() {
    saudacao(); // Saudação inicial
    calcular(); // Inicia o processo de cálculo
  }
  
  // Inicia o programa chamando a função principal
  main();
  
var opcao, num1, num2, resultado;

function calculadora() {

  opcao = prompt("Escolha uma opção:\n+: Soma\n-: Subtração\n*: Multiplicação\n/: Divisão\n");

  num1 = parseInt(prompt("Informe o primeiro número: "));
  num2 = parseInt(prompt("Informe o segundo número: "));
  console.log();

  switch (opcao) {
          case '+':
            resultado = num1 + num2;
            break;
          case '-':
            resultado = num1 - num2;
            break;
          case '*':
            resultado = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              console.log('Erro: Divisão por zero não é permitida.');
              rl.close();
              return;
            }
            resultado = num1 / num2;
            break;
          default:
            console.log('opcao inválido. Por favor, insira +, -, *, ou /.');
            rl.close();
            return;
        }
        console.log("Resultado: " + resultado);
        console.log();

        if (opcao === '/') {
            const sobra = num1 % num2;
            console.log('Sobra:', sobra);
          }
    }
calculadora();
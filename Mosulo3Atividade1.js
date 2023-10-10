//Calculadora de média

var media, nota;

media = 0;

for(let i = 1; i <= 3; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    if(nota < 0.0 || nota > 10.0){
        console.log("Nota inválida");
    }else{
        media += nota;
    }
}

media /= 3;

var condicao = media >= 7 ? "Aprovado" : "Reprovado";

console.log("Aluno " + condicao + "!");

// Calculadora de nota mínima

var nota, notaMin;

media = 0;

for(let i = 1; i <= 2; i++){
    nota = parseFloat(prompt("Informe a " + i + "° nota: "));
    if(nota < 0.0 || nota > 10.0){
        console.log("Nota inválida");
    }else{
        nota += nota;
    }
}

notaMin = ((7 * 3) - nota);

console.log("Para ficar com média 7, você precisa tirar nota " + notaMin.toFixed(1) + " na próxima prova.");
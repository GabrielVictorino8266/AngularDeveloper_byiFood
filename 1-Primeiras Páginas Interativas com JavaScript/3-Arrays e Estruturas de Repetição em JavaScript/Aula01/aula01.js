// const alunos = [`Aluno1`,`Aluno2`,`Aluno3`];

// console.log(alunos);//[ 'Aluno1', 'Aluno2', 'Aluno3' ]
// console.log(alunos[0]);//Aluno1

// // Adicionar itens
// alunos.push(`Aluno4`)//Adiciona o Aluno4
// alunos[4] = `Aluno4`//Alternativa ao push


// //Remove o ultimo
// alunos.pop();

// //Remove apenas o PRIMEIRO
// alunos.shift();

// console.log(alunos[3])//Aluno4



//criando um array para notas
let notas = [];//Cria um array vazio

notas.push(5);//notas1
notas.push(6);//notas2
notas.push(7);//notas3
notas.push(8);//notas4

// console.log(`O tamanho da lista e: ${notas.length}`);//Mostra o tamanho da lista
console.log(notas);
//somar todos os itens
// const soma = notas[0] + notas[1] + notas[2] + notas[3];

// console.log(soma / 5);



// Conhecendo a estrutura for
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];//Cada nota e salva
  soma += notas[i];//soma cada nota
  console.log(nota);//imprime a nota
};

console.log(soma / notas.length)

const nome = `GabrielVictorino`

// console.log(nome[0]);//Imprime a primeira letra

for(let i = 0; i < nome.length; i++){
  console.log(nome[i]);
}



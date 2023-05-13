type hero = {
    nome: string;
    idade: number;
    vulgo: string;
};

function printaObjeto (pessoa : hero){
    console.log(pessoa)
}

printaObjeto({
    nome: "Gabriel",
    idade: 18,
    vulgo: "SuperMan"
})
// Teste
console.log(printaObjeto)
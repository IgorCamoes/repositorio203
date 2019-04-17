// let filmes = ['Harry Potter', 'Titanic', 'Laranja Mecanica', 'Wall-e', 'Hereditario', 'Suckerpunch', 'Maze Runner'];

// let i;

// FOR CRU

// for(i=0; i<filmes.length; i++){
//     console.log(filmes[i]);
// }

// FOR OF = Lê os itens do array ao invés de índice

// for(i of filmes){
//     console.log(i);
// }

// FOR IN = Lê os índices do array ao invés dos itens 

// for(i in filmes){
//     console.log(i);
// }



// function calcularMedia(a, b, c){
//     return ((a + b + c) / arguments.length).toFixed(1);
// }

// console.log(calcularMedia(8, 2, 6));

// Arrow Function 

// nomeDaFunção = (parametros) = => {
//     código a ser executado pela função. 
// }

let filmes = [
    {titulo: "Star Wars", classificacao: 14},
    {titulo: "Shrek", classificacao: 0},
    {titulo: "Ninja Assassino", classificacao: 18},
]

let podeAssistir = [];

alert("Bem-vindo ao blockbuster!");
let idade = prompt("Digite sua idade:");

for(let i in filmes){
    if(idade >= filmes[i].classificacao){
        podeAssistir[i] = filmes[i].titulo;
    }
}

alert("Filmes disponíveis: " + podeAssistir);
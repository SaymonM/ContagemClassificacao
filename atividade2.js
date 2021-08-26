let numDeAlunos = 10;
let contador = 0;

do {
    if (contador == 0) {
        console.log("O número é zero!!");
    } else if (contador % 2 != 0){
        console.log("O número é impar: "+ contador);
    } else
    console.log("O número é par: "+ contador);
    contador++;
} while (contador <= numDeAlunos);

// while (contador <= numDeAlunos) {
//     if (contador == 0) {
//         console.log("O número é zero!!");
//     } else if (contador % 2 != 0){
//         console.log("O número é impar: "+ contador);
//     } else
//     console.log("O número é par: "+ contador);
//     contador++;
// }

// for (let contador = 0; contador <= numDeAlunos; contador++) {
    
//     if (contador == 0){
//         console.log("Número é zero!!");
//     }
//     else if (contador % 2 == 0 ) {
//        console.log("Número Par: "+ contador); 
//     }
//     else{
//         console.log("Número Impar: "+ contador);
//     }  
// }


// let listaDeAlunos = ["Marcelo", "Juh", "Cleber"]

// // for (const aluno of listaDeAlunos){
// //     console.log(aluno);
// // }

// listaDeAlunos.forEach(aluno => {
//     console.log(aluno);
// });
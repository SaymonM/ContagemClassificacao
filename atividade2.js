let numDeAlunos = 10;

for (let contador = 10; contador <= numDeAlunos; contador++) {
    console.log(contador);
    if (contador == 0){
        console.log("Número é zero!!");
    }
    else if (contador % 2 == 0 ) {
       console.log("Número Par: "+ contador); 
    }
    else if (contador % 2 != 0){
        console.log("Número Impar: "+ contador);
    }  
}
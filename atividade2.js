let numDeAlunos = 10;

for (let contador = 0; contador <= numDeAlunos; contador++) {
    
    if (contador == 0){
        console.log("Número é zero!!");
    }
    else if (contador % 2 == 0 ) {
       console.log("Número Par: "+ contador); 
    }
    else{
        console.log("Número Impar: "+ contador);
    }  
}
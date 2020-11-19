const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question("ingrese hasta que numero saldran todos los numeros primos que haya", (c)=> {
        var i,j,s=0;
        for(i=2;i<c;i++){
           for(j=1;j<i;j++){
            if( i % j==0 && j!=1 && j!=i){
             s=1;
            }
            
           }
             if(s==0){
                 console.log(i);
             }  
             else{
                 s=0;
             }
           }
     rl.close();
    });
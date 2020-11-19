const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("ingrese el numero maximo que podran salir los numeros aleatorios", (s) => {
    rl.question("ingrese la cantidad de numeros aleatorios", (c)=> {
    var a;
        for(i=1;i<=c;i++){
            a=Math.floor(Math.random()*s);
            console.log(a);
        }


     rl.close();
    });
 });
 
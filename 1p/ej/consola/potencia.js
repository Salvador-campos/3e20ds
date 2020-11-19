const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  rl.question("ingrese el numero para elevar a la potencia", (s) => {
    rl.question("ingrese la cantidad de veces que se elevara el numero", (c)=> {
    var p;
        for(i=1;i<=c;i++){
            p=Math.pow(s, i); 
            console.log(p);
        }


     rl.close();
    });
 });